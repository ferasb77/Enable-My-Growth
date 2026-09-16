import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const targetUrl = 'http://127.0.0.1:4321/tech-v2';
const screenshotDir = path.resolve('screenshots', 'tech-v2');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const viewports = [
  { name: '1200x800', width: 1200, height: 800, mobile: false, dsf: 1, fullPage: false },
  { name: '1024x768', width: 1024, height: 768, mobile: false, dsf: 1, fullPage: false },
  { name: '960x768', width: 960, height: 768, mobile: false, dsf: 1, fullPage: false },
  { name: '768x1024', width: 768, height: 1024, mobile: false, dsf: 1, fullPage: false },
  { name: '390x844', width: 390, height: 844, mobile: true, dsf: 2, fullPage: true }
];

async function captureViewportCDP(vp) {
  const port = 9350 + Math.floor(Math.random() * 500);
  const proc = spawn(EDGE_PATH, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    '--hide-scrollbars',
    '--disable-extensions',
    '--disable-background-networking',
    targetUrl
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const res = await fetch(`http://127.0.0.1:${port}/json`);
    const tabs = await res.json();
    const pageTab = tabs.find(t => t.type === 'page' && t.url.includes('tech-v2'));
    if (!pageTab) {
      throw new Error('Could not find tech-v2 page tab');
    }

    const ws = new WebSocket(pageTab.webSocketDebuggerUrl);

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const timer = setTimeout(() => reject(new Error(`Timeout on ${method}`)), 15000);
        const handler = (evt) => {
          const msg = JSON.parse(evt.data);
          if (msg.id === msgId) {
            clearTimeout(timer);
            ws.removeEventListener('message', handler);
            resolve(msg.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await new Promise(r => { ws.onopen = r; });

    await send('Page.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.dsf,
      mobile: vp.mobile
    });
    await send('Emulation.setVisibleSize', {
      width: vp.width,
      height: vp.height
    }).catch(() => {});

    // Allow render & Three.js resize to finish
    await new Promise(r => setTimeout(r, 2500));

    // Evaluate diagnostic bounding boxes
    const diagCode = `
      (() => {
        function textBounds(el) {
          if (!el) return null;
          const range = document.createRange();
          range.selectNodeContents(el);
          return range.getBoundingClientRect();
        }

        const requiredItems = [
          { name: 'badge-desktop', sel: '.pe3-badge-text-desktop' },
          { name: 'badge-mobile', sel: '.pe3-badge-text-mobile' },
          { name: 'headline', sel: '.pe3-headline' },
          { name: 'subhead', sel: '.pe3-subhead' },
          { name: 'context', sel: '.pe3-sig-context .pe3-calib-label' },
          { name: 'people', sel: '.pe3-sig-people .pe3-calib-label' },
          { name: 'programs', sel: '.pe3-sig-programs .pe3-calib-label' },
          { name: 'evidence', sel: '.pe3-sig-evidence .pe3-calib-label' },
          { name: 'decisions', sel: '.pe3-sig-decisions .pe3-calib-label' },
          { name: 'perspective-tag', sel: '.pe3-core-tag' },
          { name: 'better-judgment', sel: '.pe3-judgment-text' }
        ];

        const iw = window.innerWidth;
        const sw = document.documentElement.scrollWidth;
        const items = [];
        let allPass = true;

        for (const it of requiredItems) {
          const el = document.querySelector(it.sel);
          if (!el) continue;
          const cs = window.getComputedStyle(el);
          if (cs.display === 'none' || cs.visibility === 'hidden') continue;
          const tr = textBounds(el);
          const er = el.getBoundingClientRect();
          const passes = tr ? (tr.left >= 0 && tr.right <= iw) : false;
          if (!passes) allPass = false;
          items.push({
            name: it.name,
            text: el.innerText.trim(),
            glyphLeft: tr ? Math.round(tr.left) : null,
            glyphRight: tr ? Math.round(tr.right) : null,
            elLeft: Math.round(er.left),
            elRight: Math.round(er.right),
            passes
          });
        }

        // Verify CTA destinations
        const exploreBtn = document.querySelector('.pe3-action-tier a.pe3-btn-gold');
        const discussBtn = document.querySelector('.pe3-action-tier a.pe3-btn-outline');
        const replayBtn = document.querySelector('.pe3-replay-btn');

        return {
          iw,
          sw,
          allPass,
          items,
          exploreHref: exploreBtn ? exploreBtn.getAttribute('href') : null,
          exploreText: exploreBtn ? exploreBtn.innerText.trim() : null,
          discussHref: discussBtn ? discussBtn.getAttribute('href') : null,
          discussText: discussBtn ? discussBtn.innerText.trim() : null,
          replayText: replayBtn ? replayBtn.innerText.trim() : null
        };
      })()
    `;

    const evalRes = await send('Runtime.evaluate', {
      expression: diagCode,
      returnByValue: true
    });

    const diag = evalRes?.result?.value;
    if (diag) {
      console.log(`\n========================================`);
      console.log(`VIEWPORT: ${vp.name} (${vp.width}x${vp.height})`);
      console.log(`window.innerWidth: ${diag.iw}, document.documentElement.scrollWidth: ${diag.sw}`);
      console.log(`ALL TEXT GLYPHS IN BOUNDS: ${diag.allPass}`);
      console.log(`Explore CTA: "${diag.exploreText}" -> ${diag.exploreHref}`);
      console.log(`Discuss CTA: "${diag.discussText}" -> ${diag.discussHref}`);
      console.log(`Replay BTN: "${diag.replayText}"`);
      diag.items.forEach(it => {
        const tag = it.passes ? '✓ PASS' : '✗ FAIL';
        console.log(`  [${tag}] ${it.name} ("${it.text}"): glyph [L:${it.glyphLeft}, R:${it.glyphRight}], elem [L:${it.elLeft}, R:${it.elRight}]`);
      });
    }

    // Capture standard viewport screenshot
    const shot = await send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: false
    });

    const outFile = path.join(screenshotDir, `preview-${vp.name}.png`);
    fs.writeFileSync(outFile, Buffer.from(shot.data, 'base64'));
    console.log(`✓ Saved ${outFile}`);

    // If fullPage requested, capture full page screenshot cleanly
    if (vp.fullPage) {
      if (vp.dsf !== 1) {
        await send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.mobile
        });
        await new Promise(r => setTimeout(r, 600));
      }

      const fullShot = await send('Page.captureScreenshot', {
        format: 'png',
        captureBeyondViewport: true
      });
      const fullOutFile = path.join(screenshotDir, `fullpage-${vp.name}.png`);
      fs.writeFileSync(fullOutFile, Buffer.from(fullShot.data, 'base64'));
      console.log(`✓ Saved full-page ${fullOutFile}`);
    }

    ws.close();
  } finally {
    proc.kill();
  }
}

async function run() {
  for (const vp of viewports) {
    await captureViewportCDP(vp);
  }
  console.log('\nAll V2 viewports captured successfully.');
}

run().catch(console.error);

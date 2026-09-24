import fs from 'fs';
import path from 'path';

const outDir = path.resolve('out');
const rootDir = path.resolve('.');
const deployDir = path.resolve('dist-deploy');

// 1. Clean and prepare dist-deploy directory
if (fs.existsSync(deployDir)) {
  fs.rmSync(deployDir, { recursive: true, force: true });
}
fs.mkdirSync(deployDir, { recursive: true });

// 2. Files to include in clean production deployment
const staticExtensions = ['.html', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.pdf', '.xml', '.txt'];
const specificFiles = ['CNAME', 'style.css', 'analytics.js', 'effects.js', 'nav.js'];

// Copy root production assets (excluding source, dev config, node_modules, and internal prototypes)
const excludedFromDeploy = ['tech-v2.html', 'tech-hero-3d.html', 'tech-hero-lab.html', 'home-v2.html', 'philosophy-v2.html', 'training-v2.html', 'ideas-v2.html'];
const rootEntries = fs.readdirSync(rootDir, { withFileTypes: true });

for (const entry of rootEntries) {
  if (entry.isFile()) {
    if (excludedFromDeploy.includes(entry.name)) {
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (staticExtensions.includes(ext) || specificFiles.includes(entry.name)) {
      fs.copyFileSync(path.join(rootDir, entry.name), path.join(deployDir, entry.name));
    }
  }
}

// 3. Copy Next.js pre-rendered tech.html (from out/index.html)
const srcHtml = path.join(outDir, 'index.html');
const destHtml = path.join(deployDir, 'tech.html');
const rootTechHtml = path.join(rootDir, 'tech.html');

if (fs.existsSync(srcHtml)) {
  fs.copyFileSync(srcHtml, destHtml);
  fs.copyFileSync(srcHtml, rootTechHtml);
  console.log('✓ Successfully copied tech.html to clean deploy directory and root');
} else {
  console.error('✗ out/index.html not found!');
  process.exit(1);
}

// 3b-d. Sync local prototype routes to root directory ONLY (NOT copied to dist-deploy)
const localPrototypes = [
  { name: 'tech-v2', file: 'tech-v2.html' },
  { name: 'tech-hero-lab', file: 'tech-hero-lab.html' },
  { name: 'tech-hero-3d', file: 'tech-hero-3d.html' },
];

for (const proto of localPrototypes) {
  const src = fs.existsSync(path.join(outDir, proto.file))
    ? path.join(outDir, proto.file)
    : path.join(outDir, proto.name, 'index.html');
  const rootDest = path.join(rootDir, proto.file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, rootDest);
    console.log(`✓ Synced ${proto.file} to local workspace root (excluded from dist-deploy)`);
  }
}

// 4. Copy _next asset directory
const srcNext = path.join(outDir, '_next');
const destNext = path.join(deployDir, '_next');
const rootNext = path.join(rootDir, '_next');

if (fs.existsSync(srcNext)) {
  fs.cpSync(srcNext, destNext, { recursive: true, force: true });
  fs.cpSync(srcNext, rootNext, { recursive: true, force: true });
  console.log('✓ Successfully copied _next assets to clean deploy directory');
} else {
  console.error('✗ out/_next not found!');
  process.exit(1);
}

console.log('✓ Clean deployment bundle assembled in dist-deploy/');

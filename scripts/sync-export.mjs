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

// Copy root production assets (excluding source, dev config, node_modules)
const rootEntries = fs.readdirSync(rootDir, { withFileTypes: true });

for (const entry of rootEntries) {
  if (entry.isFile()) {
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
  // Root tech.html remains pristine for production
  console.log('✓ Successfully copied tech.html to clean deploy directory');
} else {
  console.error('✗ out/index.html not found!');
  process.exit(1);
}

// 3b. Copy Next.js pre-rendered tech-v2.html (preview route)
const srcV2Html = fs.existsSync(path.join(outDir, 'tech-v2.html'))
  ? path.join(outDir, 'tech-v2.html')
  : path.join(outDir, 'tech-v2', 'index.html');
const destV2Html = path.join(deployDir, 'tech-v2.html');
const rootTechV2Html = path.join(rootDir, 'tech-v2.html');

if (fs.existsSync(srcV2Html)) {
  fs.copyFileSync(srcV2Html, destV2Html);
  fs.copyFileSync(srcV2Html, rootTechV2Html);
  console.log('✓ Successfully copied tech-v2.html preview route to deploy directory');
}

// 3c. Copy Next.js pre-rendered tech-hero-lab.html (standalone prototype route)
const srcLabHtml = fs.existsSync(path.join(outDir, 'tech-hero-lab.html'))
  ? path.join(outDir, 'tech-hero-lab.html')
  : path.join(outDir, 'tech-hero-lab', 'index.html');
const destLabHtml = path.join(deployDir, 'tech-hero-lab.html');
const rootTechLabHtml = path.join(rootDir, 'tech-hero-lab.html');

if (fs.existsSync(srcLabHtml)) {
  fs.copyFileSync(srcLabHtml, destLabHtml);
  fs.copyFileSync(srcLabHtml, rootTechLabHtml);
  console.log('✓ Successfully copied tech-hero-lab.html prototype route to deploy directory');
}

// 3d. Copy Next.js pre-rendered tech-hero-3d.html (Three.js WebGL prototype route)
const src3DHtml = fs.existsSync(path.join(outDir, 'tech-hero-3d.html'))
  ? path.join(outDir, 'tech-hero-3d.html')
  : path.join(outDir, 'tech-hero-3d', 'index.html');
const dest3DHtml = path.join(deployDir, 'tech-hero-3d.html');
const rootTech3DHtml = path.join(rootDir, 'tech-hero-3d.html');

if (fs.existsSync(src3DHtml)) {
  fs.copyFileSync(src3DHtml, dest3DHtml);
  fs.copyFileSync(src3DHtml, rootTech3DHtml);
  console.log('✓ Successfully copied tech-hero-3d.html WebGL prototype route to deploy directory');
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

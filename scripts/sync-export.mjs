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
  fs.copyFileSync(srcHtml, rootTechHtml); // Also keep local tech.html in sync
  console.log('✓ Successfully copied tech.html to clean deploy directory');
} else {
  console.error('✗ out/index.html not found!');
  process.exit(1);
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

import fs from 'fs';
import path from 'path';

const outDir = path.resolve('out');
const rootDir = path.resolve('.');

// Ensure out/index.html is copied to tech.html
const srcHtml = path.join(outDir, 'index.html');
const destHtml = path.join(rootDir, 'tech.html');

if (fs.existsSync(srcHtml)) {
  fs.copyFileSync(srcHtml, destHtml);
  console.log('✓ Successfully exported Next.js static page to tech.html');
} else {
  console.error('✗ out/index.html not found!');
  process.exit(1);
}

// Copy _next static asset folder to root _next folder
const srcNext = path.join(outDir, '_next');
const destNext = path.join(rootDir, '_next');

if (fs.existsSync(srcNext)) {
  fs.cpSync(srcNext, destNext, { recursive: true, force: true });
  console.log('✓ Successfully synced _next assets to root directory');
} else {
  console.error('✗ out/_next not found!');
  process.exit(1);
}

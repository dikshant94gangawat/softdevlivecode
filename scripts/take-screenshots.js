const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const BASE = process.env.BASE_URL || 'http://localhost:3001';
const outDir = path.join(__dirname, '..', 'screenshots');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const pages = ['/', '/services', '/fintech', '/about', '/contact'];

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  for (const p of pages) {
    const url = `${BASE.replace(/\/$/, '')}${p}`;
    const name = p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '-');
    const file = path.join(outDir, `${name}.png`);
    try {
      console.log('Opening', url);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
      // give time for dynamic content to settle
      await new Promise((res) => setTimeout(res, 800));
      await page.screenshot({ path: file, fullPage: true });
      console.log('Saved', file);
    } catch (err) {
      console.error('Failed to capture', url, err.message);
    }
  }

  await browser.close();
  console.log('Done screenshots in', outDir);
})();


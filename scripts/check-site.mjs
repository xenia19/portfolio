import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

// Validate the deployable output, including the static case-study routes copied by Vite.
const root = path.resolve('dist');
assert.ok(fs.existsSync(path.join(root, 'index.html')), 'Build the site before running this check.');
const pages = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (entry.name.endsWith('.html')) pages.push(file);
  }
}
walk(root);
const origin = 'https://xenia19.github.io';
const base = '/portfolio/';
let references = 0;
const external = new Set();
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(root, file).split(path.sep).join('/');
  const url = new URL(base + relative, origin);
  assert.match(html, /<html lang="en">/, `${relative}: English document language`);
  assert.match(html, /<title>[^<]+<\/title>/, `${relative}: title`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `${relative}: description`);
  assert.match(html, /rel="canonical"/, `${relative}: canonical`);
  assert.match(html, /property="og:description"/, `${relative}: social description`);
  for (const tag of html.matchAll(/<(?:a|img|source|script|link|video)\b[^>]*>/g)) {
    if (tag[0].startsWith('<img')) assert.match(tag[0], /\balt="[^"]+"/, `${relative}: meaningful image alt text`);
    for (const match of tag[0].matchAll(/\b(?:href|src|poster)="([^"]+)"/g)) {
      const value = match[1].replaceAll('&amp;', '&');
      if (/^(?:data:|mailto:|tel:)/.test(value)) continue;
      const target = new URL(value, url);
      if (target.origin !== origin) { external.add(target.href); continue; }
      assert.ok(target.pathname.startsWith(base), `${relative}: path escapes GitHub Pages base: ${value}`);
      let targetPath = path.join(root, decodeURIComponent(target.pathname.slice(base.length)));
      if (target.pathname.endsWith('/')) targetPath = path.join(targetPath, 'index.html');
      assert.ok(fs.existsSync(targetPath), `${relative}: missing local target ${value}`);
      if (target.hash && targetPath.endsWith('.html') && path.relative(root, targetPath) !== 'index.html') {
        const targetHtml = fs.readFileSync(targetPath, 'utf8');
        assert.ok(targetHtml.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `${relative}: missing fragment ${value}`);
      }
      references++;
    }
  }
  if (relative !== 'index.html') {
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${relative}: one main heading`);
    assert.match(html, /<main\b/, `${relative}: main landmark`);
    assert.match(html, /class="skip-link"/, `${relative}: skip navigation`);
  }
}
console.log(`PASS: ${pages.length} built HTML pages; ${references} local references; metadata, fragments, images, and case-study landmarks.`);
console.log(`External destinations retained: ${external.size}. Reachability is checked separately; no external requests are made by this script.`);

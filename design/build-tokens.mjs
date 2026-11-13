import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(await readFile(path.join(root, 'design/tokens.json'), 'utf8'));
const kebab = (value) => value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const css = [
  '/* Generated from design/tokens.json. Edit the JSON, then run: node design/build-tokens.mjs */',
  ':root {',
  ...Object.entries(tokens.colors).map(([key, value]) => `  --night-${kebab(key)}: ${value};`),
  ...Object.entries(tokens.typography).map(([key, value]) => `  --night-${kebab(key)}: ${value};`),
  ...Object.entries(tokens.spacing).map(([key, value]) => `  --night-space-${key}: ${value};`),
  ...Object.entries(tokens.radii).map(([key, value]) => `  --night-radius-${kebab(key)}: ${value};`),
  ...Object.entries(tokens.layout).map(([key, value]) => `  --night-${kebab(key)}: ${value};`),
  '}',
  ''
].join('\n');

await mkdir(path.join(root, 'docs/ui'), { recursive: true });
await writeFile(path.join(root, 'docs/ui/tokens.css'), css, 'utf8');
console.log('Generated docs/ui/tokens.css from design/tokens.json');

#!/usr/bin/env node
/**
 * Codemod: remove Storybook blocks coupling from component .mdx files.
 *
 *   - Drops  `import { Meta, Canvas, ... } from '@storybook/blocks'`
 *   - Drops  `import * as XStories from './X.stories'`
 *   - Drops  `<Meta of={...}/>`
 *   - Rewrites `<Canvas of={XStories.Foo}/>` → `<Canvas example="Foo" />`
 *   - Rewrites `<Story of={XStories.Foo}/>`  → `<Canvas example="Foo" />`
 *
 * Usage:  node scripts/strip-storybook-mdx.mjs <file> [<file>...]
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';

function strip(mdx) {
  let out = mdx;

  out = out.replace(
    /^\s*import\s+\{[^}]*\}\s+from\s+['"]@storybook\/blocks['"]\s*;?\s*\n/gm,
    '',
  );

  out = out.replace(
    /^\s*import\s+\*\s+as\s+\w+Stories\s+from\s+['"]\.\/[^'"]+\.stories['"]\s*;?\s*\n/gm,
    '',
  );

  out = out.replace(/<Meta\s+of=\{[^}]+\}\s*\/>\s*/g, '');

  out = out.replace(
    /<Canvas\s+of=\{\w+Stories\.(\w+)\}\s*\/>/g,
    '<Canvas example="$1" />',
  );
  out = out.replace(
    /<Story\s+of=\{\w+Stories\.(\w+)\}\s*\/>/g,
    '<Canvas example="$1" />',
  );

  return out;
}

async function processFile(file) {
  const original = await fs.readFile(file, 'utf8');
  const next = strip(original);
  if (next === original) {
    console.log(`• unchanged: ${path.relative(process.cwd(), file)}`);
    return false;
  }
  await fs.writeFile(file, next);
  console.log(`✓ rewritten: ${path.relative(process.cwd(), file)}`);
  return true;
}

async function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.error('Usage: node scripts/strip-storybook-mdx.mjs <file> [<file>...]');
    process.exit(1);
  }
  let changed = 0;
  for (const file of files) {
    if (await processFile(path.resolve(file))) changed += 1;
  }
  console.log(`\n${changed} file(s) rewritten.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

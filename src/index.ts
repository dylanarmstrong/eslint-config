// import { createRequire } from 'node:module';
// import path from 'node:path';

import { default as builtin } from './rules/builtin.js';
import { default as prettier } from './rules/prettier.js';
import { default as jsxA11y } from './rules/jsx-a11y.js';
import { default as typescript } from './rules/typescript.js';
import { default as unicorn } from './rules/unicorn.js';
import { default as react } from './rules/react.js';
import { default as reactHooks } from './rules/react-hooks.js';

// const extensions = [
//   './plugins/import',
//   './plugins/jsx-a11y',
//   './plugins/react',
//   './plugins/react-hooks',
// ].map((file) => mapFile(file));

export default [
  builtin,
  typescript.valid ? typescript.config : {},
  react.valid ? react.config : {},
  reactHooks.valid ? reactHooks.config : {},
  jsxA11y.valid ? jsxA11y.config : {},
  unicorn.valid ? unicorn.config : {},
  prettier.valid ? prettier.config : {},
].flat();

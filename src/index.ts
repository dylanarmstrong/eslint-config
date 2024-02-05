import path from 'path';
import { createRequire } from 'module';

import { hasTypescript } from './utils';

const env = {
  es6: true,
  node: true,
};

const req = createRequire(path.join(__dirname, 'src'));
const mapFile = (file: string) => req.resolve(file);

const exts = [
  './rules/builtin',
  './plugins/import',
  './plugins/jsx-a11y',
  './plugins/react',
  './plugins/react-hooks',
].map(mapFile);

const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
};

// Check for valid typescript setup
const overrides = hasTypescript() ? [
  {
    extends: ['./plugins/typescript'],
    files: ['**/*.ts?(x)'],
  },
] : [];

const parserOptions = {
  ecmaFeatures: {
    impliedStrict: true,
  },
  ecmaVersion: 11,
  sourceType: 'module',
};

export {
  env,
  exts as extends,
  globals,
  overrides,
  parserOptions,
};

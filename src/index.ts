import { createRequire } from 'node:module';
import path from 'node:path';

import { hasTypescript } from './utils';

const environment = {
  es6: true,
  node: true,
};

const request = createRequire(path.join(__dirname, 'src'));
const mapFile = (file: string) => request.resolve(file);

const extensions = [
  './rules/builtin',
  './plugins/import',
  './plugins/jsx-a11y',
  './plugins/react',
  './plugins/react-hooks',
  './plugins/unicorn',
  // Prettier must be last
  './plugins/prettier',
].map((file) => mapFile(file));

const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
};

// Check for valid typescript setup
const overrides = hasTypescript()
  ? [
      {
        extends: ['./plugins/typescript'],
        files: ['**/*.ts?(x)'],
      },
    ]
  : [];

const parserOptions = {
  ecmaFeatures: {
    impliedStrict: true,
  },
  ecmaVersion: 11,
  sourceType: 'module',
};

export {
  environment as env,
  extensions as extends,
  globals,
  overrides,
  parserOptions,
};

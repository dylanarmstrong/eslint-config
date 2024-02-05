import { hasTypescript } from '../utils';

// Check for valid typescript setup
const hasPlugin = hasTypescript();

let exts;
let parserOptions;
let plugins;
let rules;

if (hasPlugin) {
  exts = [
    'plugin:@typescript-eslint/recommended',
  ];

  parserOptions = {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: true,
  };

  plugins = ['@typescript-eslint'];

  rules = {
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_$',
      varsIgnorePattern: '^_$',
    }],
    'no-duplicate-imports': 'off',
    'no-unused-vars': 'off',
  };
}

export {
  exts as extends,
  parserOptions,
  plugins,
  rules,
};

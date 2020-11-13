const { requires } = require('../utils');

// Check for valid typescript setup
const hasPlugin = requires(
  'typescript',
  [
    'typescript',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
  ],
);

let moduleExports = {};
if (hasPlugin) {
  moduleExports = {
    extends: ['plugin:@typescript-eslint/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      parser: '@typescript-eslint/parser',
    },
    plugins: ['@typescript-eslint'],
    rules: {
    },
  };
}

module.exports = moduleExports;

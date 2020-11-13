const { requires } = require('../utils');

// Check for valid typescript setup
const hasPlugin = requires(
  'jsx-a11y',
  [
    'eslint-plugin-jsx-a11y',
  ],
);

let moduleExports = {};
if (hasPlugin) {
  moduleExports = {
    env: {
      browser: true,
    },
    extends: ['plugin:jsx-a11y/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['jsx-a11y'],
    rules: {
    },
  };
}

module.exports = moduleExports;

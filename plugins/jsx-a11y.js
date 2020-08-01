const { requires } = require('../utils');

// Check for valid typescript setup
const hasPlugin = requires(
  'jsx-a11y',
  [
    'eslint-plugin-jsx-a11y',
  ],
);

if (hasPlugin) {
  module.exports = {
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
} else {
  module.exports = {};
}

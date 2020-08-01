const { requires } = require('../utils');

// Check for valid typescript setup
const hasPlugin = requires(
  'react-hooks',
  [
    'react',
    'eslint-plugin-react-hooks',
  ],
);

if (hasPlugin) {
  module.exports = {
    env: {
      browser: true,
    },
    extends: ['plugin:react-hooks/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react-hooks'],
    rules: {
    },
  };
} else {
  module.exports = {};
}

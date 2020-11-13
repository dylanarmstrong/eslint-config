const { requires } = require('../utils');

// Check for valid react-hooks setup
const hasPlugin = requires(
  'react-hooks',
  [
    'react',
    'eslint-plugin-react-hooks',
  ],
);

let moduleExports = {};
if (hasPlugin) {
  moduleExports = {
    env: {
      browser: true,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react-hooks'],
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
    },
  };
}

module.exports = moduleExports;

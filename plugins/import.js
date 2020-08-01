const { requires } = require('../utils');

// Check for valid typescript setup
const hasPlugin = requires(
  'import',
  [
    'eslint-plugin-import',
  ],
);

if (hasPlugin) {
  module.exports = {
    extends: [
      'plugin:import/errors',
      'plugin:import/warnings',
    ],
    rules: {
      'import/no-cycle': ['error', { 'commonjs': true }],
      'import/no-unresolved': ['error', { 'commonjs': true }],
    },
    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.json'],
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      },
    },
  };
} else {
  module.exports = {};
}

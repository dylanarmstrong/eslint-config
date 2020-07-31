// Check for eslint-plugin-react
let hasPlugin = true;
try {
  // Throws an exception when not resolvable
  require.resolve('eslint-plugin-import');
} catch (_) {
  console.warn('[@dylanarmstrong/eslint] Unable to find eslint-plugin-import.');
  hasPlugin = false;
}

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

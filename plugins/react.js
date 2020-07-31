// Check for eslint-plugin-react
let hasPlugin = true;
try {
  // Throws an exception when not resolvable
  [
    'eslint-plugin-react',
    'react',
  ].map((pkg) => require.resolve(pkg, { paths: ['./node-modules'] }));
} catch (_) {
  console.warn('[@dylanarmstrong/eslint] Unable to find eslint-plugin-react.');
  hasPlugin = false;
}

if (hasPlugin) {
  module.exports = {
    env: {
      browser: true,
    },
    extends: ['plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
} else {
  module.exports = {};
}

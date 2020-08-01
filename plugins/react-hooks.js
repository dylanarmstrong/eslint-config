// Check for eslint-plugin-react
let hasPlugin = true;
try {
  // Throws an exception when not resolvable
  [
    'eslint-plugin-react-hooks',
    'react',
  ].map((pkg) => require.resolve(pkg, { paths: ['./node-modules'] }));
} catch (_) {
  console.warn('[@dylanarmstrong/eslint] Unable to find react or eslint-plugin-react-hooks.');
  hasPlugin = false;
}

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

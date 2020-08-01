// Check for eslint-plugin-jsx-a11y
let hasPlugin = true;
try {
  // Throws an exception when not resolvable
  [
    'eslint-plugin-jsx-a11y',
  ].map((pkg) => require.resolve(pkg, { paths: ['./node-modules'] }));
} catch (_) {
  console.warn('[@dylanarmstrong/eslint] Unable to find eslint-plugin-jsx-a11y.');
  hasPlugin = false;
}

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

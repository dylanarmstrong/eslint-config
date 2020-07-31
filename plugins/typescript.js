// Check for valid typescript setup
let hasPlugin = true;
try {
  // Throws an exception when not resolvable
  [
    'typescript',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
  ].map(require.resolve);
} catch (_) {
  console.warn('[@dylanarmstrong/eslint] Unable to find typescript.');
  hasPlugin = false;
}

if (hasPlugin) {
  module.exports = {
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
} else {
  module.exports = {};
}

module.exports = {
  extends: [
    './lib/index.js',
  ],
  root: true,
  rules: {
    'import/no-mutable-exports': 'off',
    'import/no-unused-modules': 'off',
  },
};

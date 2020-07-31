module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    './rules/common',
    './rules/errors',
    './rules/es6',
    './rules/node',
    './rules/style',
    './plugins/import',
    './plugins/react',
  ].map(require.resolve),
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  overrides: [
    {
      extends: ['./plugins/typescript'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
};

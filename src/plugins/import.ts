import { hasTypescript as checkHasTypescript, requires } from '../utils';

// Check for valid import setup
const hasTypescript = checkHasTypescript(true);

let hasPlugin = false;
if (hasTypescript) {
  hasPlugin = requires('import', [
    'eslint-plugin-import',
    // Typescript requires this plugin as well
    'eslint-import-resolver-typescript',
  ]);
} else {
  hasPlugin = requires('import', ['eslint-plugin-import']);
}

let plugins;
let rules;
let settings;
if (hasPlugin) {
  const all = ['.d.ts', '.js', '.json', '.jsx', '.ts', '.tsx'];

  plugins = ['import'];

  rules = {
    'import/default': 'error',
    'import/dynamic-import-chunkname': 'off',
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': 'off',
    'import/first': 'error',
    'import/group-exports': 'warn',
    'import/max-dependencies': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'warn',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/no-commonjs': 'off',
    'import/no-cycle': 'error',
    'import/no-default-export': 'off',
    'import/no-deprecated': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-internal-modules': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-packages': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'off',
    'import/no-unresolved': 'error',
    'import/no-unused-modules': [
      'error',
      {
        missingExports: false,
        unusedExports: true,
      },
    ],
    'import/no-useless-path-segments': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
  };

  settings = {
    'import/extensions': all,
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: all,
      },
      typescript: hasTypescript && {
        project: './tsconfig.json',
      },
    },
  };
}

export { plugins, rules, settings };

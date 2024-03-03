import path from 'node:path';
import { createRequire } from 'node:module';

import { requires } from '../utils';

// Check for valid react setup
const hasPlugin = requires('react', ['react', 'eslint-plugin-react']);

let environment;
let parserOptions;
let plugins;
let rules;
let settings;

if (hasPlugin) {
  let version = 'detect';
  let requireReactInScope = true;
  const require = createRequire(path.join(__dirname, 'node_modules'));
  const React = require('react');
  // React > 17 doesn't require React to be imported
  if (Object.hasOwnProperty.call(React, 'version')) {
    ({ version } = React);
    const n = Number.parseFloat(version);
    if (n > 16) {
      requireReactInScope = false;
    }
  }

  environment = {
    browser: true,
  };

  parserOptions = {
    ecmaFeatures: {
      jsx: true,
    },
  };

  plugins = ['react'];

  rules = {
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'error',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': [
      'error',
      {
        forbid: ['any', 'array', 'object'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-boolean-value': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-filename-extension': ['error', {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
    }],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    // Interferes with general indent
    'react/jsx-indent-props': 'off',
    'react/jsx-key': 'error',
    'react/jsx-max-depth': 'off',
    // max-len gives better understanding of what's the acceptable number of props
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': [
      'error',
      { ignorePureComponents: true },
    ],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': requireReactInScope ? 'error' : 'off',
    'react/require-default-props': 'error',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-default-props': 'error',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': 'error',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
  };

  settings = {
    react: {
      version,
    },
  };
}

export { environment as env, parserOptions, plugins, rules, settings };

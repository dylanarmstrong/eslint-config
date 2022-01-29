import { requires } from '../utils';

// Check for valid react-hooks setup
const hasPlugin = requires(
  'react-hooks',
  [
    'react',
    'eslint-plugin-react-hooks',
  ],
);

let env;
let parserOptions;
let plugins;
let rules;

if (hasPlugin) {
  env = {
    browser: true,
  };

  parserOptions = {
    ecmaFeatures: {
      jsx: true,
    },
  };

  plugins = ['react-hooks'];

  rules = {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
  };
}

export {
  env,
  parserOptions,
  plugins,
  rules,
};

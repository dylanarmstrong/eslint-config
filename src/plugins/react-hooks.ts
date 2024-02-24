import { requires } from '../utils';

// Check for valid react-hooks setup
const hasPlugin = requires('react-hooks', [
  'react',
  'eslint-plugin-react-hooks',
]);

let environment;
let parserOptions;
let plugins;
let rules;

if (hasPlugin) {
  environment = {
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

export { environment as env, parserOptions, plugins, rules };

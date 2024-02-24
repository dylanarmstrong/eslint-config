import { requires } from '../utils';

// Check for valid typescript setup
const hasPlugin = requires('jsx-a11y', ['eslint-plugin-jsx-a11y']);

let environment;
let extensions;
let parserOptions;
let plugins;
let rules;

if (hasPlugin) {
  environment = {
    browser: true,
  };

  extensions = ['plugin:jsx-a11y/recommended'];

  parserOptions = {
    ecmaFeatures: {
      jsx: true,
    },
  };

  plugins = ['jsx-a11y'];

  rules = {};
}

export {
  environment as env,
  extensions as extends,
  parserOptions,
  plugins,
  rules,
};

import { requires } from '../utils';

// Check for valid typescript setup
const hasPlugin = requires('jsx-a11y', ['eslint-plugin-jsx-a11y']);

let env;
let exts;
let parserOptions;
let plugins;
let rules;

if (hasPlugin) {
  env = {
    browser: true,
  };

  exts = ['plugin:jsx-a11y/recommended'];

  parserOptions = {
    ecmaFeatures: {
      jsx: true,
    },
  };

  plugins = ['jsx-a11y'];

  rules = {};
}

export { env, exts as extends, parserOptions, plugins, rules };

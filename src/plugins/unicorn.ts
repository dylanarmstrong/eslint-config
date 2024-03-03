import { requires } from '../utils';

// Check for valid prettier setup
const hasPlugin = requires('unicorn', ['eslint-plugin-unicorn']);

let extensions;
let plugins;

if (hasPlugin) {
  extensions = ['plugin:eslint-plugin-unicorn/recommended'];
  plugins = ['unicorn'];
}

export { extensions as extends, plugins };

import { requires } from '../utils';

// Check for valid prettier setup
const hasPlugin = requires('prettier', ['prettier', 'eslint-config-prettier']);

let extensions;

if (hasPlugin) {
  extensions = ['prettier'];
}

export { extensions as extends };

import { requires } from '../utils';

// Check for valid typescript setup
const hasPlugin = requires('prettier', ['prettier', 'eslint-config-prettier']);

let exts;

if (hasPlugin) {
  exts = ['prettier'];
}

export { exts as extends };
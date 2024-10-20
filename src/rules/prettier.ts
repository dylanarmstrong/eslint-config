import type { FlatConfig } from '../types.js';
import requires from '../utils/requires.js';

// Check for valid prettier setup
const hasPlugin = requires('prettier', ['prettier', 'eslint-config-prettier']);

let config: undefined | FlatConfig[];

if (hasPlugin) {
  const plugin = await import('eslint-config-prettier');
  config = [plugin.default];
}

export default { config, valid: config !== undefined };

import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { FlatConfig } from '../types.js';

// Check for valid prettier setup
const hasPlugin = requires('prettier', ['prettier', 'eslint-config-prettier']);

let config: undefined | FlatConfig;

if (hasPlugin) {
  const plugin = await import('eslint-config-prettier/flat');
  config = plugin.default;
}

export default addValid([{ config }]);

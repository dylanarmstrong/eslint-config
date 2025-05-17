import requires from '../utils/requires.js';
import type { FlatConfig } from '../types.js';
import { addValid } from '../utils/add-valid.js';

// Check for valid jsx-a11y setup
const hasPlugin = requires('jsx-a11y', ['eslint-plugin-jsx-a11y']);

let config: undefined | FlatConfig;

if (hasPlugin) {
  const plugin = await import('eslint-plugin-jsx-a11y');

  config = plugin.default.flatConfigs.recommended;
}

export default addValid([{ config }]);

import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { FlatConfig } from '../types.js';

// Check for valid prettier setup
const hasPlugin = requires('unicorn', ['eslint-plugin-unicorn']);

let config: undefined | FlatConfig;

if (hasPlugin) {
  const plugin = await import('eslint-plugin-unicorn');
  config = plugin.default.configs.recommended;

  if (config.rules) {
    // Vite environment file cannot be renamed
    config.rules['unicorn/prevent-abbreviations'] = [
      'error',
      {
        ignore: [String.raw`vite-env\.d$`],
      },
    ];
  }
}

export default addValid([{ config }]);

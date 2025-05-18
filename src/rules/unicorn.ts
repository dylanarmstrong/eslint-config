import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { PossibleRuleModule } from '../types.js';

// Check for valid prettier setup
const hasPlugin = requires('unicorn', ['eslint-plugin-unicorn']);

let configs: undefined | PossibleRuleModule[];

if (hasPlugin) {
  const plugin = await import('eslint-plugin-unicorn');
  configs = [
    { config: plugin.default.configs.recommended },
    {
      config: {
        rules: {
          'unicorn/prevent-abbreviations': [
            'error',
            {
              // Vite environment file cannot be renamed
              ignore: [String.raw`vite-env\.d$`],
            },
          ],
        },
      },
    },
  ];
}

export default addValid(configs);

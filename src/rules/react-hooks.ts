import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { PossibleRuleModule } from '../types.js';

// Check for valid react-hooks setup
const hasPlugin = requires('react-hooks', [
  'react',
  'eslint-plugin-react-hooks',
]);

let configs: undefined | PossibleRuleModule[];

if (hasPlugin) {
  const plugin = await import('eslint-plugin-react-hooks');

  configs = [
    {
      config: {
        plugins: {
          'react-hooks': plugin.default,
        },
        rules: plugin.default.configs.recommended.rules,
      },
    },
  ];
}

export default addValid(configs);

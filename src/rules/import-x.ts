import { addValid } from '../utils/add-valid.js';
import hasTypescript from '../utils/has-typescript.js';
import requires from '../utils/requires.js';

import type { PossibleRuleModule } from '../types.js';

// Check for valid typescript setup
const isTypescript = hasTypescript();

// Check for valid eslint-plugin-import-x setup
const hasPlugin = isTypescript
  ? requires('import-x', [
      'eslint-plugin-import-x',
      'eslint-import-resolver-typescript',
    ])
  : requires('import-x', ['eslint-plugin-import-x']);

let configs: undefined | PossibleRuleModule[];

if (hasPlugin) {
  const plugin = await import('eslint-plugin-import-x');
  configs = [
    { config: plugin.default.flatConfigs.recommended },
    {
      config: isTypescript ? plugin.default.flatConfigs.typescript : undefined,
    },
    {
      config: {
        rules: {
          'import-x/order': [
            'error',
            {
              alphabetize: {
                caseInsensitive: true,
                order: 'asc',
              },
              groups: [
                ['builtin', 'external'],
                ['internal'],
                ['parent', 'sibling', 'index'],
                ['object'],
                ['type'],
              ],
              'newlines-between': 'always',
            },
          ],
        },
      },
    },
  ];
}

export default addValid(configs);

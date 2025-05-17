import hasTypescript from '../utils/has-typescript.js';
import type { PossibleRuleModule } from '../types.js';
import { addValid } from '../utils/add-valid.js';

// Check for valid typescript setup
const isTypescript = hasTypescript();

let configs: undefined | PossibleRuleModule[];

if (isTypescript) {
  const tseslint = await import('typescript-eslint');

  configs = tseslint
    .config({
      extends: [...tseslint.configs.recommended],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_$',
            varsIgnorePattern: '^_$',
          },
        ],
      },
    })
    .map((config) => ({ config }));
}

export default addValid(configs);

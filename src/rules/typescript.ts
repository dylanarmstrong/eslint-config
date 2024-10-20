import hasTypescript from '../utils/has-typescript.js';
import type { FlatConfig } from '../types.js';

// Check for valid typescript setup
const isTypescript = hasTypescript();

let config: undefined | FlatConfig[];

if (isTypescript) {
  const tseslint = await import('typescript-eslint');

  config = tseslint.config({
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
  });
}

export default { config, valid: config !== undefined };

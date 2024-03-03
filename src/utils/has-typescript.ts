import { accessSync } from 'node:fs';
import { join } from 'node:path';

import requires from './requires';

const hasTypescript = (quiet = false): boolean => {
  let returnValue = requires(
    'typescript',
    [
      'typescript',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ],
    quiet,
  );

  if (returnValue) {
    try {
      accessSync(join(process.cwd(), 'tsconfig.json'));
      returnValue = true;
    } catch {
      returnValue = false;
    }
  }

  return returnValue;
};

export default hasTypescript;

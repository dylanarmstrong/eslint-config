import fs from 'node:fs';
import path from 'node:path';

import requires from './requires.js';

const hasTypescript = (quiet = false): boolean => {
  let returnValue = requires(
    'typescript',
    ['typescript', 'typescript-eslint'],
    quiet,
  );

  if (returnValue) {
    try {
      fs.accessSync(path.join(process.cwd(), 'tsconfig.json'));
      returnValue = true;
    } catch {
      returnValue = false;
    }
  }

  return returnValue;
};

export default hasTypescript;

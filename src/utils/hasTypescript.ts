import fs from 'fs';
import path from 'path';
import process from 'process';

import requires from './requires';

const hasTypescript = (quiet = false): boolean => {
  let ret = requires(
    'typescript',
    [
      'typescript',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
    ],
    quiet,
  );

  if (ret) {
    try {
      fs.accessSync(path.join(process.cwd(), 'tsconfig.json'));
      ret = true;
    } catch (e) {
      ret = false;
    }
  }

  return ret;
};

export default hasTypescript;

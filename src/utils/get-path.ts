import path from 'node:path';
import { createRequire } from 'node:module';

const getPath = (package_: string): string | undefined => {
  try {
    const __dirname = import.meta.dirname;
    const require = createRequire(path.join(__dirname, 'node_modules'));
    const resolvedPath = require.resolve(package_, {
      paths: [path.join('.', 'node_modules')],
    });
    return resolvedPath;
  } catch {
    return undefined;
  }
};

export { getPath };

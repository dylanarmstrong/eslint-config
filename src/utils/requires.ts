import chalk from 'chalk';
import path from 'node:path';
import { createRequire } from 'node:module';

const check = (package_: string): string | undefined => {
  try {
    const require = createRequire(path.join(__dirname, 'node_modules'));
    require.resolve(package_, { paths: ['./node_modules'] });
  } catch {
    return package_;
  }
  return undefined;
};

const checked: { [key: string]: boolean } = {};

const requires = (name: string, pkgs: string[], quiet = false) => {
  if (Object.hasOwnProperty.call(checked, name)) {
    return checked[name];
  }

  const checkedPkgs = pkgs.map((package_) => check(package_)).filter(Boolean);
  if (checkedPkgs.length > 0) {
    if (!quiet) {
      // eslint-disable-next-line no-console
      console.warn(
        `${chalk.blue('[@dylanarmstrong/eslint]')} Disabling ${chalk.red(name)}: Unable to find ${chalk.green(checkedPkgs.join(', '))}.`,
      );
    }
    checked[name] = false;
    return false;
  }
  checked[name] = true;
  return true;
};

export default requires;

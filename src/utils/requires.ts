import chalk from 'chalk';
import { getPath } from './get-path.js';

const check = (package_: string): string | undefined => {
  const resolvedPath = getPath(package_);
  return resolvedPath ? undefined : package_;
};

const checked: { [key: string]: boolean } = {};

const requires = (name: string, packages: string[], quiet = false) => {
  if (Object.hasOwnProperty.call(checked, name)) {
    return checked[name];
  }

  const checkedPkgs = packages
    .map((package_) => check(package_))
    .filter(Boolean);

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

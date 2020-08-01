const chalk = require('chalk');

const check = (pkg) => {
  try {
    require.resolve(pkg, { paths: ['./node_modules'] });
  } catch (_) {
    return pkg;
  }
  return undefined;
};

const requires = (name, pkgs) => {
  const checkedPkgs = pkgs.map(check).filter(Boolean);
  if (checkedPkgs.length > 0) {
    console.warn(
      `${chalk.blue('[@dylanarmstrong/eslint]')} Disabling ${chalk.red(name)}: Unable to find ${checkedPkgs.join(', ')}.`,
    );
    return false;
  }
  return true;
};

module.exports = requires;

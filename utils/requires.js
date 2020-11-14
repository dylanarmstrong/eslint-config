const chalk = require('chalk');

const check = (pkg) => {
  try {
    require.resolve(pkg, { paths: ['./node_modules'] });
  } catch (_) {
    return pkg;
  }
  return undefined;
};

const checked = {};

const requires = (name, pkgs) => {
  if (Object.hasOwnProperty.call(checked, name)) {
    return checked[name];
  }

  const checkedPkgs = pkgs.map(check).filter(Boolean);
  if (checkedPkgs.length > 0) {
    console.warn(
      `${chalk.blue('[@dylanarmstrong/eslint]')} Disabling ${chalk.red(name)}: Unable to find ${checkedPkgs.join(', ')}.`,
    );
    checked[name] = false;
    return false;
  }
  checked[name] = true;
  return true;
};

module.exports = requires;

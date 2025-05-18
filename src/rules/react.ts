import { addValid } from '../utils/add-valid.js';
import { getPath } from '../utils/get-path.js';
import requires from '../utils/requires.js';

import type { PossibleRuleModule } from '../types.js';

// Check for valid react setup
const hasPlugin = requires('react', ['react', 'eslint-plugin-react']);

let configs: undefined | PossibleRuleModule[];

const reactPath = getPath('react');
if (hasPlugin && reactPath) {
  const plugin = await import('eslint-plugin-react');

  const React = await import(reactPath);
  let version = 'detect';
  let requireJsxRuntime = false;
  if (Object.hasOwnProperty.call(React, 'version')) {
    ({ version } = React);
    const n = Number.parseFloat(version);
    if (n > 16) {
      requireJsxRuntime = true;
    }
  }

  configs = [
    { config: plugin.default.configs.flat?.['recommended'] },
    {
      config: requireJsxRuntime
        ? plugin.default.configs.flat?.['jsx-runtime']
        : undefined,
    },
    {
      config: {
        settings: {
          react: {
            version,
          },
        },
      },
    },
  ];
}

export default addValid(configs);

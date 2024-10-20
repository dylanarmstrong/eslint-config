import requires from '../utils/requires.js';
import type { FlatConfig } from '../types.js';
import { getPath } from '../utils/get-path.js';

// Check for valid react setup
const hasPlugin = requires('react', ['react', 'eslint-plugin-react']);

let config: undefined | FlatConfig[];

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

  config = [
    plugin.default.configs.flat.recommended,
    requireJsxRuntime ? plugin.default.configs.flat['jsx-runtime'] : {},
    {
      settings: {
        react: {
          version,
        },
      },
    },
  ];
}

export default { config, valid: config !== undefined };

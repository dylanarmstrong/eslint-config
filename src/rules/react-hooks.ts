import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { FlatConfig } from '../types.js';

// Check for valid react-hooks setup
const hasPlugin = requires('react-hooks', [
  'react',
  'eslint-plugin-react-hooks',
]);

let config: undefined | FlatConfig;

if (hasPlugin) {
  const plugin = await import('eslint-plugin-react-hooks');

  config = {
    plugins: {
      'react-hooks': plugin.default,
    },
    rules: plugin.default.configs.recommended.rules,
  };
}

export default addValid([{ config }]);

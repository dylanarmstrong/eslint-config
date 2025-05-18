import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { PossibleRuleModule } from '../types.js';

// Check for valid jsx-a11y setup
const hasPlugin = requires('jsx-a11y', ['eslint-plugin-jsx-a11y']);

let configs: undefined | PossibleRuleModule[];

if (hasPlugin) {
  const plugin = await import('eslint-plugin-jsx-a11y');

  configs = [{ config: plugin.default.flatConfigs.recommended }];
}

export default addValid(configs);

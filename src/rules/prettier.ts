import { addValid } from '../utils/add-valid.js';
import requires from '../utils/requires.js';

import type { PossibleRuleModule } from '../types.js';

// Check for valid prettier setup
const hasPlugin = requires('prettier', ['prettier', 'eslint-config-prettier']);

let configs: undefined | PossibleRuleModule[];

if (hasPlugin) {
  const plugin = await import('eslint-config-prettier/flat');
  configs = [{ config: plugin.default }];
}

export default addValid(configs);

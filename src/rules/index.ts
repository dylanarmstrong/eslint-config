import builtin from './builtin.js';
import jsxA11y from './jsx-a11y.js';
import prettier from './prettier.js';
import react from './react.js';
import reactHooks from './react-hooks.js';
import typescript from './typescript.js';
import unicorn from './unicorn.js';

import type { FlatConfig } from '../types.js';

const modules: FlatConfig[] = [
  builtin,
  typescript,
  react,
  reactHooks,
  jsxA11y,
  unicorn,
  prettier,
]
  .flat()
  .map((ruleModule) => (ruleModule.valid ? ruleModule.config : {}));

export default modules;

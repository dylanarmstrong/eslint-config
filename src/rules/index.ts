import builtin from './builtin.js';
import importX from './import-x.js';
import jsxA11y from './jsx-a11y.js';
import prettier from './prettier.js';
import reactHooks from './react-hooks.js';
import react from './react.js';
import typescript from './typescript.js';
import unicorn from './unicorn.js';

import type { FlatConfig } from '../types.js';

const modules: FlatConfig[] = [
  builtin,
  typescript,
  importX,
  react,
  reactHooks,
  jsxA11y,
  unicorn,
  // Prettier must always be last
  prettier,
]
  .flat()
  .map((ruleModule) => (ruleModule.valid ? ruleModule.config : {}));

export default modules;

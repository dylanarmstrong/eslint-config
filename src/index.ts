import builtin from './rules/builtin.js';
import prettier from './rules/prettier.js';
import jsxA11y from './rules/jsx-a11y.js';
import typescript from './rules/typescript.js';
import unicorn from './rules/unicorn.js';
import react from './rules/react.js';
import reactHooks from './rules/react-hooks.js';

export default [
  builtin,
  typescript.valid ? typescript.config : {},
  react.valid ? react.config : {},
  reactHooks.valid ? reactHooks.config : {},
  jsxA11y.valid ? jsxA11y.config : {},
  unicorn.valid ? unicorn.config : {},
  prettier.valid ? prettier.config : {},
].flat();

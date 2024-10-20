## @dylanarmstrong/eslint-config

### Installation

Install with `pnpm` (or `npm` / `yarn`):

```bash
pnpm add @dylanarmstrong/eslint-config --save-dev
```

Then create an `eslint.config.js` file in your project directory:

```js
{
  export { default } from '@dylanarmstrong/eslint-config';
}
```

### Configuring

Adjust your `eslint.config.js` file as necessary by adding rules:

```js
import eslint from '@dylanarmstrong/eslint-config';

export default [
  ...eslint,
  {
    rules: {
      camelcase: 'off',
    },
  },
];
```

### Goal of this Project

All encompassing eslint rules that can be placed on any project and have this plugin
automatically adjust to the type of project.

Secondary goal is to avoid using any recommended rule sets.

### Notes

After version 0.7, flat config and `eslint@9` is required.

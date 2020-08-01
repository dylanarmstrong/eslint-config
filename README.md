## @dylanarmstrong/eslint-config

### Installation

Install with `npm` (or `yarn`):

```bash
npm i @dylanarmstrong/eslint-config --save-dev
```

Then create an `.eslintrc` file in your project directory:

```json
{
  "extends": "@dylanarmstrong"
}
```

### Configuring

Adjust your `.eslintrc` file as necessary by adding rules:

```json
{
  "extends": "@dylanarmstrong",
  "rules": {
    "no-tabs": "off"
  }
}
```

### Goal of this Project

All encompassing eslint rules that can be placed on any project and have this plugin
automatically adjust to the type of project.

Secondary goal is to avoid using any recommended rule sets.

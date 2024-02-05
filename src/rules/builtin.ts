const rules = {
  'accessor-pairs': 'error',
  'array-bracket-spacing': ['error', 'never'],
  'array-callback-return': 'error',
  'array-element-newline': ['error', 'consistent'],
  'arrow-body-style': 'error',
  'arrow-parens': 'error',
  'arrow-spacing': 'error',
  'block-scoped-var': 'error',
  'block-spacing': 'error',
  'brace-style': 'error',
  camelcase: [
    'error',
    {
      allow: ['^UNSAFE_'],
    },
  ],
  'capitalized-comments': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': ['error', 'always-multiline'],
  'comma-spacing': 'error',
  'comma-style': 'error',
  complexity: 'error',
  'computed-property-spacing': 'error',
  'consistent-return': 'error',
  'consistent-this': 'off',
  'constructor-super': 'error',
  curly: 'error',
  'default-case': 'error',
  'default-case-last': 'error',
  'default-param-last': 'error',
  'dot-location': ['error', 'property'],
  'dot-notation': 'off',
  'eol-last': 'error',
  eqeqeq: 'error',
  'for-direction': 'error',
  'func-call-spacing': 'error',
  'func-name-matching': 'off',
  'func-names': ['error', 'as-needed'],
  'func-style': 'error',
  'function-call-argument-newline': ['error', 'consistent'],
  'function-paren-newline': ['error', 'consistent'],
  'generator-star-spacing': 'error',
  'getter-return': 'error',
  'global-require': 'error',
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': 'error',
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'implicit-arrow-linebreak': 'error',
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
    },
  ],
  'jsx-quotes': 'error',
  'keyword-spacing': 'error',
  'linebreak-style': ['error', 'unix'],
  'max-classes-per-file': 'error',
  'max-depth': ['warn', 4],
  'max-len': [
    'warn',
    {
      code: 120,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
    },
  ],
  'max-statements-per-line': [
    'error',
    {
      max: 1,
    },
  ],
  'new-cap': 'error',
  'newline-per-chained-call': 'error',
  'no-alert': 'error',
  'no-async-promise-executor': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': 'error',
  'no-confusing-arrow': 'error',
  'no-console': 'warn',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'error',
  'no-constant-condition': 'error',
  'no-continue': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'error',
  'no-div-regex': 'off',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'error',
  'no-else-return': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-semi': 'error',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
  'no-func-assign': 'error',
  'no-global-assign': 'error',
  'no-implied-eval': 'error',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-lonely-if': 'error',
  'no-magic-numbers': 'off',
  'no-misleading-character-class': 'error',
  'no-mixed-requires': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': 'error',
  'no-multiple-empty-lines': 'error',
  'no-nested-ternary': 'error',
  'no-new-require': 'error',
  'no-new-symbol': 'error',
  'no-obj-calls': 'error',
  'no-octal': 'error',
  'no-param-reassign': 'error',
  'no-path-concat': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-exports': 'off',
  'no-restricted-globals': 'off',
  'no-restricted-properties': 'off',
  'no-restricted-syntax': 'off',
  'no-return-await': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-tabs': 'error',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-trailing-spaces': 'error',
  'no-undef': 'error',
  'no-unexpected-multiline': 'error',
  'no-unneeded-ternary': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_$',
      varsIgnorePattern: '^_$',
    },
  ],
  'no-use-before-define': 'error',
  'no-useless-call': 'error',
  'no-useless-catch': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-var': 'error',
  'no-void': 'error',
  'no-with': 'error',
  'nonblock-statement-body-position': ['error', 'below'],
  'object-curly-spacing': ['error', 'always'],
  'one-var-declaration-per-line': 'error',
  'operator-linebreak': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: true,
        object: false,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-object-spread': 'error',
  'prefer-template': 'error',
  'quote-props': ['error', 'consistent-as-needed'],
  quotes: [
    'error',
    'single',
    {
      avoidEscape: true,
    },
  ],
  'require-atomic-updates': 'error',
  'require-yield': 'error',
  semi: ['error', 'always'],
  'semi-style': 'error',
  'sort-imports': 'off',
  'sort-keys': 'warn',
  'sort-vars': 'warn',
  'spaced-comment': [
    'error',
    'always',
    {
      markers: ['/'],
    },
  ],
  strict: 'error',
  'switch-colon-spacing': 'error',
  'symbol-description': 'error',
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'use-isnan': 'error',
  'valid-typeof': 'error',
  'vars-on-top': 'off',
  'wrap-iife': ['error', 'inside'],
  'wrap-regex': 'off',
  'yield-star-spacing': ['error', 'after'],
  yoda: 'error',
};

export { rules };

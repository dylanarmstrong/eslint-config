export const rules = {
  'array-bracket-spacing': ['error', 'never'],
  'arrow-body-style': 'error',
  'arrow-parens': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'off',
  'constructor-super': 'error',
  'no-class-assign': 'error',
  'no-confusing-arrow': 'error',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-this-before-super': 'error',
  'no-var': 'error',
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': ['error', {
    AssignmentExpression: {
      array: true,
      object: false,
    },
    VariableDeclarator: {
      array: false,
      object: true,
    },
  }, {
    enforceForRenamedProperties: false,
  }],
  'prefer-object-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'error',
  'symbol-description': 'error',
};

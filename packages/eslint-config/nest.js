/*
 * This is a custom ESLint configuration for use with
 * Nest.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [...['@vercel/style-guide/eslint/typescript'].map(require.resolve), './base'],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  // add rules configurations here
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/order': [
      2,
      { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'] },
    ],
    'class-methods-use-this': 0,
  },
}

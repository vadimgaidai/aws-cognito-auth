const { resolve } = require('node:path')
const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript', 'turbo', 'prettier'],
  parserOptions: {
    project,
  },
  plugins: ['eslint-plugin-prettier'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        printWidth: 100,
        proseWrap: 'never',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-default-export': 'off',
    'no-shadow': 'off',
    'no-return-await': 'off',
    'turbo/no-undeclared-env-vars': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'import/no-cycle': 0,
    'import/extensions': 'off',
    'import/order': [
      2,
      { groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'] },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)', '*.config.js'],
      env: {
        node: true,
      },
    },
  ],
}

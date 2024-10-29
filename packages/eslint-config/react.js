module.exports = {
  extends: [...['@vercel/style-guide/eslint/react'].map(require.resolve), './base'],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  // add rules configurations here
  rules: {
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': [
      1,
      {
        custom: 'ignore',
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/display-name': [0, { ignoreTranspilerName: true, checkContextObjects: true }],
    'react/button-has-type': 0,
    'unicorn/filename-case': 0,
  },
  overrides: [
    {
      files: ['*.config.js'],
      env: {
        node: true,
      },
    },
  ],
}

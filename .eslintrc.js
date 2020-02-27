module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension':[
          'warn',
          {
              extensions: ['.jsx', '.js']
          }
      ],
      'import/prefer-default-export': 'off',
      'react/prop-types': ['error',
      { 'ignore': [
      'navigation',
      'currenctBalance',
      'entries',
      'route',
      'require',
      'newEntry',
      'onNewEntryPress',
      'onNavigattionMain',
      'children',
      'headerTitle',
      'footerTitle',
      'details',
      'entry',
      'isFirstItem',
      'isLastItem',
      'onPress',
      'value',
      'days',
      'data',
      'onPressActionButton',
      'entriesGrouped'] }],

      'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
       // allowTaggedTemplates: true,
      }
    ],
    'jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  },
};

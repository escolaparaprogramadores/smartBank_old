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
      'no-use-before-define': [
          'error',
          {
              "variables": false
          }
        ],
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
      'categoryType',
      'isFirstItem',
      'isLastItem',
      'onPress',
      'value',
      'days',
      'data',
      'onChangeValue',
      'debit',
      'showOthers',
      'category',
      'data_',
      'title',
      'isVisible',
      'onConfirm',
      'onCancel',
      'onOkPress',
      'onChange',
      'onChangeCategory',
      'currencyBalance',
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
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  },

};

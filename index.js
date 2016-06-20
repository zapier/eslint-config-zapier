'use strict';

module.exports = {
  'extends': 'eslint:recommended',

  'parser': 'babel-eslint',

  'env': {
    'node': true,
    'browser': true
  },

  'ecmaFeatures': {
    'jsx': true
  },

  'globals': {
    'escape': true,
    'unescape': true
  },

  'plugins': [
    'react'
    // 'no-console-log'
  ],

  'rules': {

    'strict': [0, 'never'],

    // possible errors -------------------------------------------------------------
    'comma-dangle': 0,
    'no-console': 0,

    // best practices --------------------------------------------------------------
    'consistent-return': 2,
    'curly': [2, 'all'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'eqeqeq': [2, 'smart'],
    'no-alert': 2,
    'no-caller': 2,
    'no-empty-label': 2, // DEPRECATED -> no-labels
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-unused-expressions': 2,
    'no-with': 2,
    'yoda': [2, 'never'],

    // variables -------------------------------------------------------------------
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}],
    'no-use-before-define': 2,

    // nodejs ----------------------------------------------------------------------
    'no-process-exit': 2,

    // stylistic issues ------------------------------------------------------------
    'camelcase': 0,
    'comma-spacing': 2,
    'eol-last': 2,
    'indent': [2, 2],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'new-cap': 0,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-mixed-spaces-and-tabs': [2, false],
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': 2,
    'semi-spacing': [2, {'before': false, 'after': true}],
    'space-infix-ops': 2,
    'space-return-throw-case': 2, // DEPRECATED -> keyword-spacing
    'space-unary-ops': [2, {'words': true, 'nonwords': false}],

    // ES6 -------------------------------------------------------------------------
    // n/a

    // -----------------------------------------------------------------------------
    // PLUGINS
    // -----------------------------------------------------------------------------

    // react plugin ----------------------------------------------------------------
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-quotes': [2, 'double', 'avoid-escape'],
    'react/react-in-jsx-scope': 2,
    'react/jsx-uses-react': 2,

    // no-console-log plugin -------------------------------------------------------
    // 'no-console-log/no-console-log': 2
  }
};

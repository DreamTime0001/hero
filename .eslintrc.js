// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': 0,
    'linebreak-style': [0, "error", "windows"],
    'comma-dangle': ["error", "never"],
    'quotes': 'off',
    "no-param-reassign": 0,
    "no-cond-assign": 0,
    "no-console": 0,
    "no-const-assign": 0,
    "no-unused-expressions": 0,
    "no-plusplus": 0
  }
}

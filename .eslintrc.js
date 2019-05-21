const env            = require('./server/environment')
const { isProdMode } = env

module.exports = {
  root         : true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env          : {
    browser: true,
    node   : true
  },
  extends      : [
    // 'standard',
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins      : [
    'vue'
  ],
  // add your custom rules here
  rules        : {
    // allow paren-less arrow functions
    'arrow-parens'               : 0,
    // allow async-await
    'generator-star-spacing'     : 0,
    // allow debugger during development
    'no-debugger'                : isProdMode ? 2 : 0,
    // 'space-before-function-paren': 0,
    // 'no-multi-spaces'       : [ 2, { exceptions: { VariableDeclarator: true } } ],
    'no-multi-spaces'            : 0,
    'key-spacing'                : 0,
    'semi'                       : [ 2, 'never' ],
    'no-console'                 : isProdMode ? 2 : 1,
    // 使用严格模式
    'strict'                     : 2,
    'vue/max-attributes-per-line': [ 'warn', {
      singleline: 3,
      multiline : {
        max           : 1,
        allowFirstLine: false
      }
    } ]
  },
  globals      : {}
}





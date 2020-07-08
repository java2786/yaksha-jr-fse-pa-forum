const isWindows = require('is-windows')()

module.exports = {
  exclude: [
    '.nyc_output',
    'self-coverage',
    'kbd/*',
    'public/*',
    'sql/*',
    'spec/utils/*.js'
  ],

  include: ["src/**/*.js"],

  // all: true,

  reporter: ["clover", "cobertura", "html"],

  'check-coverage': !isWindows,
  branches: 80,
  functions: 80,
  lines: 80,
  statements: 80
}
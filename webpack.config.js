const path = require('path');

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build')
  }
};
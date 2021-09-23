const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    entry: {
      app: path.join(__dirname, 'dev', 'serve.js'),
    },
  },
};

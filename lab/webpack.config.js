const { includes } = require("lodash");

module.exports = {
    entry: '/src/js/script.js',
    output: {
      path: 'C:/Users/Алёна/OneDrive/Документы/Системное программирование/lab3/biuld',
      filename: 'bundle.js'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
          include: '/src/css',
        },
        {
          test: /.html$/,
          use: 'html-loader',
          include:'/public', 
        }
      ]
    }
  };
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  entry: './main.js',
  output: {
    filename: 'bundle.js',
  },
};
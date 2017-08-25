const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const config = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.devtool = 'inline-source-map';
}

module.exports = config;

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    inline: true,
    port: 8080,
  },
  devtool: 'cheap-source-map',
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: true }
          },
          { loader: 'sass-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.css' })
  ]
}

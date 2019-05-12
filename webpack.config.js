const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'bundle.[hash].css' }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Webpack Template',
      filename: 'index.html',
      inject: 'body',
      xhtml: true,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        trimCustomFragments: true
      }
    })
  ]
}

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
  mode,
  output: {
    filename: '[name].[contenthash].js',
    clean: mode === 'production',
  },
  devtool: mode === 'development' ? 'source-map' : false,
  plugins: [
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    // new HtmlWebpackPlugin({
    //   temaplate: './src/assets/dashboard.html',
    //   minify: mode === 'production',
    // }),
    // new HtmlWebpackPlugin({
    //   filename: './src/assets/dashboard.html',
    //   minify: mode === 'production',
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: mode === 'production',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

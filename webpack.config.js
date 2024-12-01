const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      directory: 'dist',
    },
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    // new ESLintPlugin({
    //   // Plugin options
    //   extensions: ['js', 'jsx', 'ts', 'tsx'],
    //   emitError: true,
    //   emitWarning: true,
    //   failOnError: false,
    //   failOnWarning: false,
    //   useEslintrc: false,
    //   cache: true,
    // }),
  ],
  devtool: 'source-map',
};

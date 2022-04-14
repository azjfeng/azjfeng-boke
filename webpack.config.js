const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json', '.vue', '.css', '.html', '.less'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|js|jsx)$/,
        use: ['cache-loader','thread-loader','babel-loader'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.tsx$/,
      //   use: 'awesome-typescript-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.(css|less)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader','less-loader']
      },
      // {
      //   test: /\.less$/,
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // },
      {
        test: /\.(png|jpe?g|gif|ttf)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ]
  },
  mode: "production",
  // devServer: {
  //     contentBase: path.join(__dirname, 'dist'),
  //     compress: true,
  //     port: 9000,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      title: "azjfeng-boke",
      filename: "index.html",
      template: "./template/template.html",
    }),
    new CssMinimizerPlugin(), //css去重
    // gzip
    new CompressionPlugin({
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
    }),
    new MiniCssExtractPlugin()
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: "src/assets", to: "assets" },
    //   ],
    // })
  ],
  //压缩代码
  optimization: {
    minimize: true,
  },
  watch: true, //用来执行热更新
}

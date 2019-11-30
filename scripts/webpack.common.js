const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

const commonConfig = {
  entry: {
    vendor: ["react", "react-dom", "react-router", "react-router-dom"],
    index: ['./src/index.tsx']
  },
  output: {
    filename: "js/[name].[contenthash:7].js",
    path: path.resolve("./dist"),
    chunkFilename: "js/[name].[contenthash:7].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /\/node_modules\//,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '../src/assets/styles/common.less'),  // less 的mixin语法，全局注册sass/less变量
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ]
      }, {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024 * 8,
              name: "img/[name].[contenthash:7].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html?$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["manifest", 'vendor', 'index', 'babel-polyfill'],
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true

      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:7].css",
      chunkFilename: "css/[name].[contenthash:7].css"
    }),
    new webpack.optimize.SplitChunksPlugin({
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 5,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /[\\/]node_modules[\\/]/
        },
        // polyfill: {
        //   name: 'polyfill',
        //   chunks: 'initial',
        //   priority: 1,
        //   reuseExistingChunk: false,
        //   test: /core-js|runtime/
        // },
      }
    })
  ]
}

module.exports = commonConfig
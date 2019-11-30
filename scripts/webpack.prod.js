const WebpackMerge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ParallelUglifyJs = require('webpack-parallel-uglify-plugin')
const commonConfig = require('./webpack.common')
const webpack = require("webpack")

const prodConfig = {
  mode: 'production',
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new ParallelUglifyJs({
        uglifyJs: {
          output: {
            beautify: false,
            comments: false
          }
        }
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
          DEBUG: false
        }
      }),

    ]
  }

}

module.exports = WebpackMerge(commonConfig, prodConfig)
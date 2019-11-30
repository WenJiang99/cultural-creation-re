const WebpackMerge = require('webpack-merge')
const webpack = require('webpack')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const commonConfig = require('./webpack.common')

const isAnalyzeMode = false

const AnalyzerPlugin = isAnalyzeMode ? [new BundleAnalyzer({
  analyzerPort: 6678
})] : []
const devConfig = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 6677,
    contentBase: "./dist",
    historyApiFallback: true,
    proxy:{
      "/Login":"https://localhost:8080/Login"
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        DEBUG: true
      }
    }),
    ...AnalyzerPlugin
  ]

}
module.exports = WebpackMerge(devConfig, commonConfig)
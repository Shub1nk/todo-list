const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    port: 3000,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', {loader: 'css-loader', options: { modules: true}}]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    }
  ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: true
    //   }
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      inject: "body"
    })
  ]
}
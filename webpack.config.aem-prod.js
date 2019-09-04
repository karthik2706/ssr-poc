const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin=  require('copy-webpack-plugin');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserConfig = {
  entry: "./src/fe-driven/index.js",
  output: {
    path: path.resolve(__dirname, 'dist-aem'),
    filename: "bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.jpg$/, /\.png$/, /\.tff$/, /\.woff$/, /\.woff2$/],
        use : [
          {
          loader: "file-loader",
          options: {
            name: "assets/images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      },
      {
        test: /\.scss$/,
        use : ExtractTextPlugin.extract({
            use: ["css-loader", "postcss-loader", "resolve-url-loader", "sass-loader" ],
            fallback: "style-loader" // used when css not extracted
          })
      },
      {
        // test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.(png|jp(e*)g)$/,
        use: "url-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "assets/styles/[name].css",
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/images',
      to: 'assets/images'
    }]),
    new CopyWebpackPlugin([{
      from: './src/assets/fonts',
      to: 'assets/fonts'
    }])
  ]
};

module.exports = [browserConfig];

const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin=  require('copy-webpack-plugin');

const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
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
            name: "public/assets/images/[name].[ext]",
            publicPath: url => url.replace(/public/, "")
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
        test: /\.mov($|\?)|\.woff($|\?)|\.mov($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.(png|jp(e*)g)$/,
        use: "url-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "public/assets/styles/[name].css",
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/images',
      to: 'public/assets/images'
    }]),
    new CopyWebpackPlugin([{
      from: './src/assets/fonts',
      to: 'public/assets/fonts'
    }]),
    new CopyWebpackPlugin([{
      from: './src/assets/video',
      to: 'public/assets/video'
    }])
  ]
};

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.tff$/, /\.woff$/, /\.woff2$/],
        use : [
          {
          loader: "file-loader",
          options: {
            name: "public/assets/images/[name].[ext]",
            publicPath: url => url.replace(/public/, "")
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: [
            ["es2015", { "modules": false }],
    		"react",
            "react-app",
    		"stage-1"
        ] }
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
      filename: "public/assets/styles/[name].css",
      allChunks: true
    })
  ]
};

module.exports = [browserConfig, serverConfig];

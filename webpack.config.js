var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

// var path = require('path');
// const { resolve } = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');
// // const isDev = process.env.NODE_ENV === 'development';
// // var { CleanWebpackPlugin } = require('clean-webpack-plugin');
// // const HtmlWebpackPlugin = require('html-webpack-plugin')
// // var webpack = require('webpack');

// module.exports = {
//   // mode: isDev ? 'development' : 'production',
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   },
//   // devtool: 'source-map',
//   // devServer: {
//   //   contentBase: path.join(__dirname, './client/dist'), // serve your static files from here
//   //   watchContentBase: true, // initiate a page refresh if static content changes
//   //   inline: false,
//   //   proxy: [ // allows redirect of requests to webpack-dev-server to another destination
//   //     {
//   //       context: ['/repos'],  // can have multiple
//   //       target: 'http://localhost:8080', // server and port to redirect to
//   //       secure: false,
//   //     },
//   //   ],
//   //   port: 1128, // port webpack-dev-server listens to, defaults to 8080
//   //   overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
//   //     warnings: false, // defaults to false
//   //     errors: false, // defaults to false
//   //   },
//   // }
// };
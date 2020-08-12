/* global __dirname, require, module*/
// const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, minimize;

if (env === 'build') {
  minimize = true;
  outputFile = libraryName + '.min.js';
} else {
  minimize = false;
  outputFile = libraryName + '.js';
}

const config = {
  mode: 'production',
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  optimization: {
    minimize: minimize
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        // exclude: /(node_modules|bower_components)/
        exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'bower_components')]

      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    symlinks: false,
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
    alias: {
      'formio-export': path.resolve(__dirname, 'src/'),
      'html2pdf': path.resolve('./node_modules/js-html2pdf')
    }
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: '_',
      root: '_'
    }
  }
};

module.exports = config;

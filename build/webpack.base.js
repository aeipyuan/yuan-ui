const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            css: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }
            ],
            less: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'less-loader',
                options: { sourceMap: true }
              }
            ]
          },
          postLoaders: {
            html: 'babel-loader?sourceMap'
          },
          sourceMap: true
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { sourceMap: true },
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          }, {
            loader: 'css-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.less$/,
        loaders: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          }, {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'less-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          }, {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': this.resolve('src')
    }
  },
  plugins: {
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.VERSION': `'${pkg.version}'`
    }),
    new VueLoaderPlugin()
  }
}
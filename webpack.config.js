const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

 module.exports = {
    devtool: 'inline-source-map',
    entry: { main: './src/index.js' },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    resolve: {
      //import的时候省略后缀
      extensions: ['.js', '.json', '.css', '.jsx', '.less']
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader:['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            // loader: 'babel-loader',
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
          },{
            test: /\.less$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader' // translates CSS into CommonJS
              },
              {
                loader: 'less-loader', // compiles Less to CSS
                options: {
                  modifyVars: {
                    'font-size-base': '12px',
                    'primary-color': '#0EA679'
                  },
                  javascriptEnabled: true
                }
              }
            ]
          }
    ]
    },
    devServer: {
        contentBase: 'build',
        port: 3000,
        inline: true,
        hot: true
    },
    // externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'src/index.html',
            filename: "./index.html"
        })
    ]
}
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var configDefault = 
{
    mode: 'development',
    entry: 
    {
        "app": './resources/app.js'
    },
    output: 
    {
        path: path.resolve('./public/'),
        filename: '[name].js'
    },
    watch: false,
    module: 
    {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    resolve:
    {
        alias:
        {
            Vue: path.resolve('./node_modules/vue/dist/vue.js'),
            Modules: path.resolve('./resources/modules'),
        }
    }
}

module.exports = function(e)
{
    return configDefault;
}
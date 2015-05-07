var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

// 定义插件
var definePlugin = new webpack.DefinePlugin({
        __DEV__: JSON.stringify(JSON.parse(process.env.DEV || 'true'))
    }),
    bizCommonsPlugiin = new webpack.optimize.CommonsChunkPlugin('biz-common.js', ['biz1', 'biz2']),
    minChunkSizePlugin = new webpack.optimize.MinChunkSizePlugin(800);

module.exports = {
    entry: {
        main: './src/j/index.jsx',
        biz1: './src/j/biz1/index.jsx',
        biz2: './src/j/biz2/index.jsx'
    },
    output: {
        path: './public/j',
        filename: '[name].js',
        publicPath: '/assets/'
    },

    module: {
        loaders: [
            {test: /\.jsx$/, loader: 'jsx-loader?harmony!babel-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    resolve: {
        extensions: ['', '.jsx', '.js']
    },

    plugins: [
        definePlugin,
        minChunkSizePlugin,
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('../../public/c/style.css'),
        bizCommonsPlugiin
    ]
}

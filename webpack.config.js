var webpack = require("webpack");
var path = require("path");

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        'bootstrap-loader',
        './client/app'
    ],
    output: {
        path: path.join(__dirname, 'client/public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'client', 'server'],
        extensions: ['.js', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader?presets[]=es2015'
                ]
            },
            {
                test: /\.(html|css)$/,
                exclude: /node_modules/,
                use: [
                    'raw-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader?browsers=last 3 versions',
                    'sass-loader?outputStyle=expanded'
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                use: [
                    'url-loader?limit=10000',
                    'file-loader'
                ]
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                use: [
                    'imports-loader?jQuery=jquery'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        },
    }
}
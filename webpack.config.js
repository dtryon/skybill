var webpack = require('webpack');

var config = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'whatwg-fetch',
        './index.js',
        './styles/styles.css'
    ],
    devtool: 'cheap-module-source-map',
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            },
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                loaders: ['style', 'css'],
                include: [__dirname + '/styles/']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist/assets',
        publicPath: '/assets/',
        filename: 'client.bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;


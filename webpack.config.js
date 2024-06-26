const path = require('path');
const RefreshWebpackPlugins = require('@pmmmwh/react-refresh-webpack-plugin');


module.exports = {
    name: 'word-relay-setting',
    mode: 'development', //실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'],
                    },
                    debug: true,
                }],
                 '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ]
            }
        }],
    },
    plugins:[
        new RefreshWebpackPlugins()
    ],

    output: {
        path: path.join(__dirname, 'dist'), //A:\Documents\Github...
        filename: 'app.js',
        publicPath: '/piece/',
    }, // 출력
    devServer: {
        publicPath: '/piece/',
        hot: true,
    },
};
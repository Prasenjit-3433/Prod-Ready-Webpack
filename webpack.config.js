const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/'
    },
    mode: 'none',
    module: {
        rules : [
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 50 * 1024 // 50 kilobytes
                    }
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: [
                            [
                                "@babel/plugin-proposal-pipeline-operator",
                                {
                                    "proposal" : "minimal"
                                }    
                            ]
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new TerserPlugin()
    ]
};
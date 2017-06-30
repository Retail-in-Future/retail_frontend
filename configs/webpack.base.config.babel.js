import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import packageConfig from '../package.json';

const vendors = Object.keys(packageConfig.dependencies);

const absolutePath = url => path.resolve(__dirname, url);

console.log('------------------------' + process.env.NODE_ENV + '------------------------');

const baseConfig = {
    entry: {
        vendor: vendors,
        app: ['./src/entry.js'],
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: absolutePath('../dist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            src: absolutePath('../src')
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader'],
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                    },
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'sass-loader',
                }],
            }),
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'less-loader'],
            }),
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=1000',
        }],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: process.env.NODE_ENV,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true,
            disable: false,
        }),
        new HtmlWebpackPlugin({
            hash: true,
            inject: 'body',
            filename: './index.html',
            template: './template.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'app'],
            filename: '[name].js',
        }),
    ],
};

export default baseConfig;

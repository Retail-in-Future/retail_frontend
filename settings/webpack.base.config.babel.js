import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import packageConfig from '../package.json';

const vendorList = Object.keys(packageConfig.dependencies);
const environment = process.env.environment;

console.log('------------------------', environment, '------------------------');

const baseConfig = {
    entry: {
        vendor: vendorList,
        app: ['./src/entry.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
    },
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: {
            src: path.resolve(__dirname, '../src'),
            node_modules: path.resolve(__dirname, '../node_modules'),
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'eslint-loader'],
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
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                }, {
                    loader: 'less-loader',
                }],
            }),
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader?limit=1000',
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${environment}'`,
                environment: `'${environment}'`,
            },
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
    stats: { children: false },
};

export default baseConfig;

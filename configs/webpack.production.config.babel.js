import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import baseConfig from './webpack.base.config.babel';

baseConfig.output.publicPath = './';
baseConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        mangle: false,
        comments: false,
        compress: {
            warnings: false,
        },
    }),
    new BundleAnalyzerPlugin()
);
baseConfig.devtool = 'nosources-source-map';

export default baseConfig;

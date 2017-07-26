import webpack from 'webpack';
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
);
baseConfig.devtool = 'nosources-source-map';

export default baseConfig;

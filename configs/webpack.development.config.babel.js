import baseConfig from './webpack.base.config.babel';

baseConfig.output.publicPath = '/';
baseConfig.devServer = {
    compress: true,
    inline: true,
    port: 5000,
    hot: true,
    host: '0.0.0.0',
};

baseConfig.devtool = 'source-map';

export default baseConfig;

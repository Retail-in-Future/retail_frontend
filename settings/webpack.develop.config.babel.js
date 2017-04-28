import baseConfig from './webpack.base.config.babel'

export default Object.assign({}, baseConfig, {
    devServer: {
        inline: true
    },
    devtool: "source-map"
})
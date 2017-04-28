import webpack from 'webpack'
import devServer from 'webpack-dev-server'

import config from './settings/webpack.develop.config.babel'

config.entry.app.unshift(
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:5000"
);
const compiler = webpack(config);
const server = new devServer(compiler, {
    hot: true,
    disableHostCheck: true
});
server.listen(5000);

const webpack = require("@nativescript/webpack");

module.exports = (env) => {
    webpack.init(env);

    // Learn how to customize:
    // https://docs.nativescript.org/webpack
    webpack.chainWebpack((config) => {
        config.resolve.alias.set('nativescript-vue3', 'nativescript-vue');
    })
    return webpack.resolveConfig();
};

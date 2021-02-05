module.exports = {
    chainWebpack: config => {
        config.performance
        .maxEntrypointSize(20000000)
        .maxAssetSize(20000000)
    }
}
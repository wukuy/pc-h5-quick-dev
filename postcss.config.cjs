module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16,
            exclude: /(node_module)/,
            propList: ['*']
        }
    }
}

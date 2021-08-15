module.exports = {
    // publicPath: '/front-web02/'
    publicPath: process.env.VUE_APP_PENV === 'normal' ?
        '/front-web02/' : '/'
}
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: "http://120.24.150.39:2008",
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}
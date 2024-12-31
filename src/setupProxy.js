// filepath: /Users/courtneygreer/Development/invest-o-clock/src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.crunchbase.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v4', // Rewrite the path to match the Crunchbase API endpoint
      },
    })
  );
};
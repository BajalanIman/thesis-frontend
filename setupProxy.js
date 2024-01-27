const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Add a proxy to forward requests to the target server
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://logstar-online.de",
      changeOrigin: true,
    })
  );
};

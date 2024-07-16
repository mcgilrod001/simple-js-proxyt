// importts http
const morgan = require("morgan");
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { trace } = require('node:console');

const app = express()

// setups host on that ip, and port
const HOST = 'localhost';
const PORT = 3000;
const API_SERVICE_URL = "https://nerd9000.com";

app.use(morgan('dev'));

app.get('/info', (req, res, next) => {
    res.send('this is proxy service');
});


app.use('', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
}));


app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
})
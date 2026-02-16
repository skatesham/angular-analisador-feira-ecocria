const express = require('express');
const path = require('path');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 8080;

// --- Middleware para Forçar WWW e HTTPS ---
app.use((req, res, next) => {
  // Determine the target host without 'www.'
  const targetHost = req.headers.host.replace(/^www\./, '');

  // Check if we're in production AND (not HTTPS OR host starts with 'www.')
  if (process.env.NODE_ENV === 'production' && (req.headers['x-forwarded-proto'] !== 'https' || req.headers.host.startsWith('www.'))) {
    return res.redirect(301, `https://${targetHost}${req.originalUrl}`);
  }
  next();
});

// Assuming your build output is in a 'dist' folder and your SPA is in 'dist/life-front/browser'
const spaPath = path.join(__dirname, 'dist/life-front/browser');

// Proxy for /api
app.use('/api', createProxyMiddleware({
  target: 'https://api.prismachapada.com/api',
  changeOrigin: true,
}));

// Proxy for /images
app.use('/images', createProxyMiddleware({
  target: 'https://storage.googleapis.com/lifeapp-image-bucket',
  changeOrigin: true,
}));

// Serve static files from the Angular build directory, including dotfiles
app.use(
  express.static(spaPath, {
    dotfiles: 'allow',
  }),
);

// Handle SPA - Use a regex to match any path and serve index.html
// This replaces the potentially problematic app.get('*', ...)
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(spaPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

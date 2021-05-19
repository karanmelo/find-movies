const withOffline = require('next-offline');
const path = require('path');

const nextConfig = {
  env: {
    TMDB_URL: process.env.TMDB_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_TOKEN: process.env.TMDB_TOKEN,
    TMDB_LANGUAGE: process.env.TMDB_LANGUAGE,
    TMDB_IMAGE_URL: process.env.TMDB_IMAGE_URL
  }, pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  generateInDevMode: false,
  dontAutoRegisterSw: true,
  generateSw: false,
  workboxOpts: {
    swDest: './service-worker.js',
    swSrc: path.join(__dirname, 'public/sw.js'),
  }
}

module.exports = withOffline(nextConfig)
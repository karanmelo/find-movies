const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  }
});

module.exports = {
  env: {
    TMDB_URL: process.env.TMDB_URL,
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    TMDB_TOKEN: process.env.TMDB_TOKEN,
    TMDB_LANGUAGE: process.env.TMDB_LANGUAGE,
    TMDB_IMAGE_URL: process.env.TMDB_IMAGE_URL
  },
}
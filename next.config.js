/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPlugins = require('next-compose-plugins');
const withGoogleFonts = require('next-google-fonts');


module.exports = withPlugins([withGoogleFonts], {
  googleFonts: {
    fonts: [
      {
        family: 'Montserrat',
        weights: ['400', '700'],
      },
    ],
  },
});

module.exports = nextConfig

/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-unused-vars
const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

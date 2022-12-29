/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    FB_CONFIG_APIKEY: process.env.FB_CONFIG_APIKEY,
    FB_CONFIG_AUTHDOMAIN: process.env.FB_CONFIG_AUTHDOMAIN,
    FB_CONFIG_DATABASEURL: process.env.FB_CONFIG_DATABASEURL,
    FB_CONFIG_PROJECTID: process.env.FB_CONFIG_PROJECTID,
    FB_CONFIG_STORAGEBUCKET: process.env.FB_CONFIG_STORAGEBUCKET,
    FB_CONFIG_MESSAGINGSENDERID: process.env.FB_CONFIG_MESSAGINGSENDERID,
    FB_CONFIG_API_ID: process.env.FB_CONFIG_API_ID,
    MAINTENANCE_MODE: process.env.MAINTENANCE_MODE,
    CF_BASE_URL: process.env.CF_BASE_URL,
    GOOGLE_MAP_APIKEY: process.env.GOOGLE_MAP_APIKEY,
    FB_CONFIG_FCM_API: process.env.FB_CONFIG_FCM_API,
  },
}

module.exports = nextConfig;

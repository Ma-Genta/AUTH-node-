require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 8000,
  apiUrl: process.env.API_URL,
  apiKeyToken: process.env.API_KEY_TOKEN,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleSecret: process.env.GOOGLE_CLIENT_SECRET,
  twitterConsumerKey: process.env.API_KEY_TWITTER,
  twitterConsumerSecret: process.env.API_KEY_TWITTER_SECRET,
  sessionSecret: process.env.SESSION_SECRET,
  facebookClientId: process.env.FACEBOOK_CLIENT_ID,
  facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
};

module.exports = { config: config };


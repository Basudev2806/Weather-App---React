// Visit https://api.openweathermap.org & then signup to get our API keys for free
require('dotenv').config();
module.exports = {
  key: process.env.API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

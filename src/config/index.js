const dotev = require('dotenv');

dotev.config();

module.exports = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    JWT_KEY:process.env.JWT_KEY
}

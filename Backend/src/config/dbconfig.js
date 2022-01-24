const dotenv = require('dotenv')

dotenv.config();
const DB = {
    connection_url:process.env.connection_url
}
module.exports = DB



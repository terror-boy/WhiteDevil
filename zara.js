/* codded by raashii
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 DESC: process.env.BOT_DESCRIPTION === undefined ? 'WhiteDevil BC.' : process.env.BOT_DESCRIPTION,
     

};

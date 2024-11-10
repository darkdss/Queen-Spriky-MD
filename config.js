const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || '7qwnDTZR#1r_1nK9sn4KgELZQEA40MwBU_OJxOR0CGm8v2_Dxpjc', // Enter Your Session ID
    MONGODB: process.env.MONGODB || 'mongodb+srv://Krishna:pss968048@cluster0.4rfuzro.mongodb.net/?retryWrites=true&w=majority',// Enter Your MongoDB URL
    Owner: process.env.OwnerNumber || '94773824266',    // Enter Your Owner Number
};

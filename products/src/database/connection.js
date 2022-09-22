const mongoose = require('mongoose');
const { DB_URL, DB_USER, DB_PASS } = require('../config');

module.exports = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            auth: {
                username: DB_USER,
                password: DB_PASS,
                authSource: "admin",
                retryWrites: true
            }
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }
 
};

 
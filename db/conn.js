const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected with mongodb');

    } catch(err) {
        console.log("Mongodb connect error: " + err);
    }
}

module.exports = connectMongo;
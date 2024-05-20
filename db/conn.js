const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);

    } catch(err) {
        if(err) throw err;
    }
}

module.exports = connectMongo;
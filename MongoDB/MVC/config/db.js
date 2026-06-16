const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODBURL)
        console.log('MongoDB is Up');
    }catch(error){
        console.error(error);
    }
}

module.exports = connectDB;
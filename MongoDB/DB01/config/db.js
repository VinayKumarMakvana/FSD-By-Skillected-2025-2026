const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://vinaytailor52188_db_user:<password>@cluster0.4uvzvas.mongodb.net/')
        console.log('MongoDB is Up');
    }catch(error){
        console.error(error);
    }
}

module.exports = connectDB;
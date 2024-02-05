const mongoose = require('mongoose');
const { DB_URI } = require('./index');

const connectDb=async()=>{
    try {
        await mongoose.connect(DB_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('connected to DB')
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    connectDb
}
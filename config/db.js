const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        // Attmpt to connect to the database
       await mongoose.connect(db, {
           useNewUrlParser:true,
           useUnifiedTopology:true,
           useCreateIndex: true,
           useFindAndModify: false,
       }); 
       // Log that connection to db has been successful 
       console.log('Connected to MongoDB');
    } catch(err) {
        // Displays Error message then kills process
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;


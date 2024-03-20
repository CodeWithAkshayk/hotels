const mongoose= require("mongoose");
require('dotenv').config(); 
// this is a wrong practice to add this dotenv file in the db file it should be in the Server.js file 

// const mongoURL= "mongodb://127.0.0.1:27017/School";
const mongoURL=process.env.MONGO_URL;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;


db.on('connected',()=>{
    console.log('Connected to MongoDB Server ');
});
db.on('error',(err)=>{
    console.log('MongoDB Connected error : ',err);
});
db.on('disconnected',()=>{
    console.log('disConnected to MongoDB Server ');
});


module.exports = db;
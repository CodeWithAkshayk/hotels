const mongoose= require("mongoose");

// const mongoURL= "mongodb://127.0.0.1:27017/School";
const mongoURL =process.env.MONGO_URL_ONLINE;


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
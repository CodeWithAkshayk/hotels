const mongoose = require('mongoose');

const personSchema =new mongoose.Schema({
    name:{type:String, required:[true,'Name is required']},

    age:{type:Number,required:true},

    work:{
        type:String,
        enum:["chef","Manager","waiter"],
        required:true
    },

    mobile:{
        type:String,required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String,
    },

    salary:{
        type:Number,
        required:true
    }
});

const Person = mongoose.model( 'Person',personSchema );
module.exports=Person;
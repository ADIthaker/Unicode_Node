const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const infoSchema = new Schema({
    First:{
        type:String,
        required:true
    },
    Last:{
        type:String,
        required:true
    },
    English:{
        type:Number,
        required:true
    },
    Maths:{
        type:Number,
        required:true,
    },
    Average:{
        type:Number,
        requried:true,
        index:true,
    }

});

module.exports = mongoose.model('Info',infoSchema);
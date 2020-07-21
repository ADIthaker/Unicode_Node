const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const infoSchema = new Schema({
    name:{
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
    }

});

module.exports = mongoose.model('Info',infoSchema);
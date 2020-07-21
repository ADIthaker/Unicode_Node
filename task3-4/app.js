const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv =require('dotenv');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

app.set('view engine','ejs');

app.get('/',(req,res,next)=>{
    res.render('index');
    next();
})

mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>{
    app.listen(5001,
        ()=>console.log('server is listening on port 5001'));
})
.catch(err=>console.log(err));
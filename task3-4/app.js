const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const dotenv =require('dotenv');
const Info =  require('./models/info');
const bodyparser = require('body-parser');
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;  


  //static serving css

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended:false}));
app.get('/',(req,res,next)=>{
    res.render('index');
    next();
});
app.post('/postedmarks',(req,res,next)=>{
  const math = +req.body.maths;
  const eng = +req.body.english;
  const average = (math+eng)/2;
  const newinfo = new Info({
    First: req.body.fname,
    Last : req.body.lname,
    English : req.body.english,
    Maths : req.body.maths,
    Average : average
  });
  newinfo.save()
  .then(result=>{
    res.redirect('/marks');
  })
  .catch(err=>console.log(err));
});
app.get('/marks',(req,res,next)=>{
  Info.aggregate([
    {$sort:{Average:-1}}
  ]).then(data=>{
    res.render('marks',{
      list:data,
    })
  })
  .catch(err=>console.log(err));
    
});

mongoose.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>{
    app.listen(5001,
        ()=>console.log('server is listening on port 5001'));
})
.catch(err=>console.log(err));
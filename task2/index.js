const express = require('express');
const path = require('path');
const axios = require('axios');
const { response } = require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/singlejokes',(req,res,next)=>{
    axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=single')
    .then(response=>{
        // console.log(response.data);
        res.render('index',{
            category:response.data.category,
            joke:response.data.joke,
            id:response.data.id,
            type:response.data.type
        });
        return next();
    })
    .catch(err=>{
        res.status(500).send('Oops something went wrong!');
        console.log(err);
    });
});

app.get('/twopartjokes',(req,res,next)=>{
    axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=twopart')
    .then(response=>{
        res.render('index',{
            category:response.data.category,
            setup:response.data.setup,
            delivery:response.data.delivery,
            id:response.data.id,
            type:response.data.type
        })
        .catch(err=> 
        {res.status(500).send('Oops something went wrong!');
        console.log(err);
        });
    })
})


app.listen(5000,()=>{
    console.log('Listening on port 5000');
});
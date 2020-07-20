const express = require('express');
const axios = require('axios');
const app = express();

app.get('/getjokes',(req,res,next)=>{
    axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=single')
    .then(response=>{
        res.status(200).send('<p> Category : '+response.data.category+'<p> <i>'+response.data.joke+'</i><p>id : '+response.data.id+'</p>');
        console.log(response.data);
    })
    .catch(err=>{
        res.status(500).send('Oops something went wrong!');
        console.log(err);
    });
});

app.listen(5000,()=>{
    console.log('Listening on port 5000');
});
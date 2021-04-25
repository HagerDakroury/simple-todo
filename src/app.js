var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/home', function (req, res){
    res.send('this is home');
});

app.get('/me', function (req, res){
    res.send('this is me');
});

app.get('/profile/:id', function (req, res){
    res.render('profile', {person: req.params.id});
});



app.listen(3008);
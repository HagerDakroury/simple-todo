var express = require('express');
var path = require('path');
var todoController = require ('./controllers/todo-controller');


var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

todoController(app);


app.listen(3000);

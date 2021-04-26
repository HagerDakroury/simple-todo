var express = require('express');
var todoController = require ('./controllers/todo-controller');


var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./assets'));


todoController(app);


app.listen(3008);

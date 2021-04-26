var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'get better'}];


module.exports = function(app){

    app.get('/todo', function(req,res){
        res.render('todo', {todos: data});
        
    });

    app.post('/todo', function(req,res){ 
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo', function(req,res){
        
    });

};;


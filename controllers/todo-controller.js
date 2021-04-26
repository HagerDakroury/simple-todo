var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'get better'}];


module.exports = function(app){

    app.get('/todo', function(req,res){
        res.render('todo', {todos: data});
        
    });

    app.post('/todo', function(req,res){ 
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req,res){
        data = data.filter(function(todo){
            return todo.item.trim().replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);

    });
};
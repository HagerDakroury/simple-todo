window.onload = function(){

  document.getElementById("todo-form").onsubmit = function onSubmit(form){
    var todo = {item: document.querySelector('input').value};

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function(data){
        location.reload();
      }
    });

    return false;
  };


  var items = document.getElementsByClassName('todo-item');
  for (var i=0; i<items.length; i++){
    items[i].onmousedown = function onClick(){
      var item = this.textContent.trim().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          location.reload();
        }
      });
      
    };
  

  }
  
};

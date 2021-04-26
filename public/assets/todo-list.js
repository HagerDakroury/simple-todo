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


  document.getElementsByClassName("todo-item").onclick = function onClick(){
    var item = {item: document.getElementById("todo-item").text().replace(/ /g, "-")};

    
  };

};


function render(data) {
    let root = document.getElementById("root");
    root.innerHTML = "";
    for (const todo of data) {
        let template = `
    <div class="card m-3 ${(todo.completed) ? 'done' : 'uncompleted'}"
     style="width: 18rem;"
     
     >
    <div class="card-body">

        <h5 class="card-title">${todo.title}</h5>
        <p class="card-text">id: ${todo.id}</p>
        <a href="#"
         class="btn ${(todo.completed)
      ? 'btn-secondary disabled' : 'btn-primary'}"
      onclick="completeItem(${todo.id})"
   >
   ${(todo.completed) ? 'Done' : 'Complete'}
   </a>

    </div>
  </div>
  
    `;
        root.innerHTML += template;
    }
}
render(todos);
function completeItem(id) {
    let findTodo = todos.find(function(todo){
        return todo.id == id;
    })
    findTodo.completed = true;
    // console.log(todos);
    render(todos)
}
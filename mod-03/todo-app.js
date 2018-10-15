var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; 

function renderTodos() {
    listElement.innerHTML = '';
    todos.forEach(todo => {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');

        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'removeTodo(' +todos.indexOf(todo)+ ')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
}

function addTodo() {
    var newTodo = inputElement.value;
    todos.push(newTodo);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderTodos();

buttonElement.onclick = addTodo;
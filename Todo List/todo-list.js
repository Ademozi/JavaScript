const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'create your first task',
    dueDate: '2026-12-22'
}];

/*[{
    name: 'make dinner',
    dueDate: '2026-12-22'
}, {
    name: 'train calisthenics',
    dueDate: '2026-10-22'
}];
*/

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class='delete-todo-button 
        js-delete-todo-button'
        >Delete</button>
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    // we have to do it after putting the HTML code on the page
    // to select all the buttons, 
    // because querySelector give us only the first one
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });

}

document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    localStorage.setItem('todoList', JSON.stringify(todoList));

    inputElement.value = '';

    renderTodoList();
}
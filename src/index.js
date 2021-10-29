import Update from './completed.js';
import './style.css';

class TodoDis {
  static populateTodos() {
    const todos = [
      { description: 'doing some errand', completed: false, index: 0 },
      { description: 'meeting with my friends', completed: false, index: 1 },
      { description: 'learning to play piano', completed: false, index: 2 },
    ];

    let todosloc;
    if (localStorage.getItem('data')) {
      todosloc = JSON.parse(localStorage.getItem('data'));
    } else {
      localStorage.setItem('data', JSON.stringify(todos));
      todosloc = JSON.parse(localStorage.getItem('data'));
    }

    const itemslist = document.querySelector('.cont-todos');
    todosloc.forEach((todos) => {
      const itemlist = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.className = 'check';
      checkbox.id = todos.index;
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = todos.completed;
      const todoField = document.createElement('input');
      todoField.className = 'todo-edt-input';
      if (todos.completed === true) {
        todoField.style.textDecoration = 'line-through';
      }
      todoField.setAttribute('type', 'text');
      const iconSpan = document.createElement('span');
      iconSpan.className = 'symbol-option-cont';
      iconSpan.innerHTML = '&vellip;';
      itemlist.className = 'todo';

      itemlist.appendChild(checkbox);
      todoField.value = todos.description;
      itemlist.appendChild(todoField);
      itemlist.appendChild(iconSpan);
      itemslist.appendChild(itemlist);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  TodoDis.populateTodos();
  Update.checked();
});

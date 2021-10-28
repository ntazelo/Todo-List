import './style.css';

class TodoDis {
  static populateTodos() {
    const todos = [
      { description: 'doing some errand', completed: true, index: 0 },
      { description: 'meeting with my friends', completed: true, index: 1 },
      { description: 'learning to play piano', completed: true, index: 2 },
    ];
    const itemslist = document.querySelector('.cont-todos');
    todos.forEach((todos) => {
      const itemlist = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.className = 'check';
      checkbox.setAttribute('type', 'checkbox');
      const todoField = document.createElement('input');
      todoField.className = 'todo-edt-input';
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

document.addEventListener('DOMContentLoaded', TodoDis.populateTodos());

/* class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
} */
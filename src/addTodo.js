function listItm(todos) {
  const itemlist = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.className = 'check';

  checkbox.addEventListener('change', () => {
    if (checkbox.nextElementSibling.style.textDecoration !== 'line-through') {
      checkbox.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      checkbox.nextElementSibling.style.textDecoration = 'none';
    }
    const data = JSON.parse(localStorage.getItem('data'));
    const indx = todos.index;
    const action = data.filter((todo) => indx === todo.index);
    if (action[0].completed === false) {
      action[0].completed = true;
      data.splice(indx - 1, 1, action[0]);
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      action[0].completed = false;
      data.splice(indx - 1, 1, action[0]);
      localStorage.setItem('data', JSON.stringify(data));
    }
  });
  checkbox.id = todos.index;
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todos.completed;
  const todoField = document.createElement('input');
  todoField.className = 'todo-edt-input';
  todoField.setAttribute('type', 'text');
  todoField.addEventListener('input', () => {
    if (todoField.value !== '') {
      const data = JSON.parse(localStorage.getItem('data'));
      const indx = todos.index;
      const action = data.filter((todo) => indx === todo.index);
      action[0].description = todoField.value;
      data.splice(indx - 1, 1, action[0]);
      localStorage.setItem('data', JSON.stringify(data));
    }
  });
  const iconSpan = document.createElement('span');
  iconSpan.className = 'symbol-option-cont';
  iconSpan.innerHTML = '&vellip;';
  itemlist.className = 'todo';
  if (todos.completed === true) {
    todoField.style.textDecoration = 'line-through';
  }
  itemlist.appendChild(checkbox);
  todoField.value = todos.description;
  itemlist.appendChild(todoField);
  itemlist.appendChild(iconSpan);

  return itemlist;
}

export default class AddTodo {
  static populateTodos() {
    let todosloc;
    if (localStorage.getItem('data')) {
      todosloc = JSON.parse(localStorage.getItem('data'));

      const itemslist = document.querySelector('.cont-todos');
      todosloc.forEach((todos) => {
        const listItem = listItm(todos);
        itemslist.appendChild(listItem);
      });
    }
  }

  static add() {
    const fieldTodo = document.querySelector('.new-todo-field');
    const listItems = document.querySelector('.cont-todos');
    fieldTodo.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        if (localStorage.getItem('data') === null && fieldTodo.value.length > 0) {
          const todosList = [];
          const todos = {
            description:
             fieldTodo.value,
            completed: false,
            index: todosList.length + 1,
          };
          todosList.push(todos);
          localStorage.setItem('data', JSON.stringify(todosList));
          const itmList = listItm(todos);
          listItems.appendChild(itmList);
          fieldTodo.value = '';
        } else if (localStorage.getItem('data') !== null && fieldTodo.value.length > 0) {
          const data = JSON.parse(localStorage.getItem('data'));
          const todos = { description: fieldTodo.value, completed: false, index: data.length + 1 };
          data.push(todos);
          localStorage.setItem('data', JSON.stringify(data));
          const itmList = listItm(todos);
          listItems.appendChild(itmList);
          fieldTodo.value = '';
        } else {
          console.log('error occurred');
        }
      }
    });
  }
}
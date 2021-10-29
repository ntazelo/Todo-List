import AddTodo from './addTodo.js';
import deleteTodo from './delete.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  AddTodo.add();
  AddTodo.populateTodos();
  /* deleteTodo(); */
});

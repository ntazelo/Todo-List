import AddTodo from './todo.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  AddTodo.add();
  AddTodo.populateTodos();
  AddTodo.deleteTodo();
  alert('js working');
});

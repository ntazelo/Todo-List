export default function deleteTodo() {
  const clearAll = document.querySelector('.btn-reset');
  clearAll.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      data.forEach((todo) => {
        if (todo.completed === true) {
          data.splice(todo.index - 1, 1);
          localStorage.setItem('data', JSON.stringify(data));
        }
      });
    }
  });
}
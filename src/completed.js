export default class Update {
  static checked() {
    const checkbox = document.querySelectorAll('.check');
    checkbox.forEach((el) => {
      el.addEventListener('change', () => {
        if (el.nextElementSibling.style.textDecoration !== 'line-through') {
          el.nextElementSibling.style.textDecoration = 'line-through';
        } else {
          el.nextElementSibling.style.textDecoration = 'none';
        }

        const data = JSON.parse(localStorage.getItem('data'));
        const indx = Number(el.id);
        const action = data.filter((todo) => indx === todo.index);

        if (action[0].completed === false) {
          action[0].completed = true;
          data.splice(indx, 1, action[0]);
          localStorage.setItem('data', JSON.stringify(data));
        } else {
          data.splice(indx, 1, action[0]);
          action[0].completed = false;
          data.splice(indx, 1, action[0]);
          localStorage.setItem('data', JSON.stringify(data));
        }
      });
    });
  }
}
describe('test CRUD function', () => {
  const taskList = [1];

  test('add task to to-do List', () => {
    expect(taskList).toHaveLength(1);
  });
});
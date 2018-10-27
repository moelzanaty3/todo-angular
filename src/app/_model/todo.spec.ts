import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('accept values in the constructor', () => {
    let todo = new Todo({
      title: 'Finish Robusta Task',
      body: 'My Name is Mohammed Elzanaty',
      complete: true
    });
    expect(todo.title).toEqual('Finish Robusta Task');
    expect(todo.body).toEqual('My Name is Mohammed Elzanaty');
    expect(todo.complete).toEqual(true);
  });
});

import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../_model';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {
  newTodo: Todo = new Todo();
  @Output()
  add: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  addTodo() {
    const reg = /^[a-zA-Z\s]+$/;
    if (this.newTodo.title && reg.test(this.newTodo.title)) {
      this.add.emit(this.newTodo);
      this.newTodo = new Todo();
    }
    return null;
  }
}

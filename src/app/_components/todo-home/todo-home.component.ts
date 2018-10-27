import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../../_services';
import { Todo } from '../../_model';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) {}

  public ngOnInit() {
    this.todoDataService.getAllTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onAddTodo(todo) {
    this.todoDataService.addTodo(todo).subscribe(newTodo => {
      this.todos = this.todos.concat(newTodo);
    });
  }

  onToggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo).subscribe(updatedTodo => {
      todo = updatedTodo;
    });
  }

  onRemoveTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id).subscribe(_ => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    });
  }
}

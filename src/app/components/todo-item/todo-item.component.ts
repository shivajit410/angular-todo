import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit(): void {}

  // Set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  // Toggle
  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  // Delte
  onDelete(todo) {
    console.log('toggled');
  }
}

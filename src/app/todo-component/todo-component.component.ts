import { Component, OnInit, } from '@angular/core';
import {ToDo}from './todo-model'
@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css'],
})
export class TodoComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  newTodoTitle: string = '';
  todos: ToDo[] = [];

  onTodoClick(id: number) {
    this.todos[id].completed = !this.todos[id].completed;
    console.log(id);
  }

  onSubmit(input: string) {
    let newTodo : ToDo = {
      completed: false,
      description: input,
    };
    this.todos.push(newTodo);
    this.newTodoTitle = ''
  }

  onInput(input: string) {
    this.newTodoTitle = input;
  }

  onDelete(id: number) {
    this.todos.splice(id, 1);
  }
}

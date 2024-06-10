import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { validFilters } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  todos: Todo[] = [];
  filtroActual: validFilters;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    //this.store.select('todos').subscribe( todos => this.todos = todos )
    this.store.subscribe( ({ todos, filter }) => {
      this.todos = todos;
      this.filtroActual = filter;
    })
  }
}

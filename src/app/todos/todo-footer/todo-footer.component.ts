import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { deleteCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.validFilters = 'todos';
  typeFilters: actions.validFilters[] = ['todos','completados', 'pendientes']

  pendientes: number = 0;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
      this.store.subscribe( state => {
        this.currentFilter = state.filter;
        this.pendientes = state.todos.filter(todo => !todo.completed).length;
      })
  }

  changeFilter(filtro: actions.validFilters) {
    this.currentFilter = filtro;
    this.store.dispatch(
      actions.setFilter({ filtro: filtro })
    )
  }

  deleteCompletedToDo() {
    this.store.dispatch(
      deleteCompleted()
    )
  }
}

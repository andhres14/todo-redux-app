import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
  txtInput: FormControl;

  constructor(private store: Store) {
    this.txtInput = new FormControl('', Validators.required);
  }

  add() {
    if (!this.txtInput.valid) return;

    this.store.dispatch(actions.create({ text: this.txtInput.value }));
    this.txtInput.reset();
  }

}

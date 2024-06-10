import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputFisic') txtInputFisic: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;

  isEditing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl( this.todo.completed );
    this.txtInput = new FormControl( this.todo.text, Validators.required );

    this.chkCompleted.valueChanges.subscribe( value => {
      console.log(value)
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    })
  }

  edit() {
    this.isEditing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputFisic.nativeElement.select();
    }, 1)
  }

  finishEdition() {
    this.isEditing = false;

    if (!this.txtInput.valid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }

    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        text: this.txtInput.value
      })
    )
  }

  deleteToDo() {
    this.store.dispatch(actions.borrar({ id: this.todo.id }));
  }

}

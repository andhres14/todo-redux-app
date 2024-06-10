import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de deadpool')
];

const _todoReducer = createReducer(initialState,
  on(actions.create, (state, { text }) => [ ...state, new Todo( text )] ),
  on(actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id ) ),
  on(actions.deleteCompleted, (state) => state.filter( todo => !todo.completed) ),
  on(actions.toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id !== id) { return todo }
      
      return {
        ...todo,
        completed: !todo.completed
      }
    });
  }),
  on(actions.editar, (state, { id, text }) => {
    return state.map( todo => {
      if (todo.id !== id) { return todo }
      
      return {
        ...todo,
        text
      }
    });
  }),
  on(actions.toggleAll, (state, { completed }) => {
    return state.map( todo => {
      return {
        ...todo,
        completed
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}
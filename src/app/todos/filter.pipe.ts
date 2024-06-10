import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterToDo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch(filter) {
      case 'completados':
        return todos.filter(todo => todo.completed)
        
      case 'pendientes':
        return todos.filter(todo => !todo.completed)
        
      default:
        return todos;
    }
  }

}

import { createAction, props } from '@ngrx/store';

export const create = createAction('[TODO] Create ToDo', props<{ text: string }>());
export const toggle = createAction('[TODO] Toggle ToDo', props<{ id: number }>());
export const toggleAll = createAction('[TODO] Toggle All ToDo', props<{ completed: boolean }>());
export const borrar = createAction('[TODO] Delete ToDo', props<{ id: number }>());
export const editar = createAction('[TODO] Edit ToDo', props<{ id: number, text: string }>());
export const deleteCompleted = createAction('[TODO] Delete All Completed ToDo');

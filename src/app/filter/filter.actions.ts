import { createAction, props } from '@ngrx/store'

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction('[Filter] SetFilter',
    props<{ filtro: validFilters }>()
);
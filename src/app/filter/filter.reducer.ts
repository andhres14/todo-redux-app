import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filter.actions'

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer<validFilters, Action>(initialState,
    on(setFilter, (state, { filtro }) => filtro ),
);


export function filterReducer(state: any, action: any) {
    return _filterReducer(state, action);
}
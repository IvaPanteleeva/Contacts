import * as State from '../app.state';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { AppUiActions } from '../actions/+index';

export const appReducers = createReducer(
  State.initialAppState,
  on(AppUiActions.resetState, (state): State.AppState => {
    return State.initialAppState;
  })
);

export const reducers: ActionReducerMap<State.AppState> = {
  appReducers,
};

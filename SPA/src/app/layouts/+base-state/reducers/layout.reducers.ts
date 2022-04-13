import { combineReducers, createReducer, on } from '@ngrx/store';
import * as State from '../layout.state';
import { SidebarUiActions } from '../actions/+index';

export const sidebarVisibilityReducer = createReducer<boolean>(
  State.initialSidebarVisibility,
  on(SidebarUiActions.setSidebarVisibility, (state): boolean => {
    return !state;
  })
);

export const pageHeaderReducer = createReducer<string>(
  State.initialTitle,
  on(SidebarUiActions.setPageHeaderTitle, (state, { title }): string => {
    return title;
  })
);

export const layoutReducers = combineReducers<State.State>({
  isSidebarOpen: sidebarVisibilityReducer,
  title: pageHeaderReducer,
});

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../layout.state';

const getLayoutState = createFeatureSelector<State>('layout');

export const getSidebarVisibility = createSelector(
  getLayoutState,
  (state) => state.isSidebarOpen
);

export const getTitle = createSelector(getLayoutState, (state) => state.title);

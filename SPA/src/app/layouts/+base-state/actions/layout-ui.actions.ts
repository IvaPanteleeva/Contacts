import { createAction, props } from '@ngrx/store';

export const setSidebarVisibility = createAction(
  '[Layout UI] Set Sidebar Visibility'
);

export const setPageHeaderTitle = createAction(
  '[Layout UI] Set Page Header Title',
  props<{ title: string }>()
);

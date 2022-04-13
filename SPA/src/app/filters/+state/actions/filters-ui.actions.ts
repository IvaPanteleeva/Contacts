import { createAction, props } from '@ngrx/store';

export const setActivitiesFilterByFirstName = createAction(
  '[Filter] Set Contacts List First Name Filter',
  props<{ firstName: string }>()
);

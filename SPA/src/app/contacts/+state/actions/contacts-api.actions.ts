import { createAction, props } from '@ngrx/store';
import {CreateContactType} from '../../../shared/types/contacts/create-contact.type';

export const loadList = createAction(
  '[Contacts API] Load Contacts',
  props<{ shouldReload: boolean }>()
);

export const createContact = createAction(
  '[Contacts API] Create Contact',
  props<{ contact: CreateContactType }>()
);

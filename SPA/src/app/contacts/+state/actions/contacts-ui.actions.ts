import { createAction, props } from '@ngrx/store';
import { SearchContactsType } from '../../../shared/types/contacts/search-contacts.type';
import { HttpErrorResponse } from '@angular/common/http';
import {CreateContactType} from '../../../shared/types/contacts/create-contact.type';

// Load
export const loadListSuccess = createAction(
  '[Contacts UI] Load Contacts Success',
  props<{ searchContactsResponse: SearchContactsType }>()
);

export const loadListFail = createAction(
  '[Contacts UI] Load Contacts Fail',
  props<{ error: HttpErrorResponse }>()
);

export const createContactSuccess = createAction(
  '[Contacts UI] Create Contact Success',
  props<{ message: string }>()
);

export const createContactFail = createAction(
  '[Contacts UI] Create Contact Fail',
  props<{ error: HttpErrorResponse }>()
);

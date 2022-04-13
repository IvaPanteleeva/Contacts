import * as State from '../contacts.state';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { ContactsApiActions, ContactsUiActions } from '../actions/+index';

export const contactsListReducer = createReducer<State.ContactsListState>(
  State.initialContactsListState,
  on(
    ContactsApiActions.loadList,
    (state, { shouldReload }): State.ContactsListState => {
      return {
        ...state,
        loading: shouldReload || !state.contacts || state.contacts.length === 0,
      };
    }
  ),
  on(
    ContactsUiActions.loadListSuccess,
    (state, { searchContactsResponse }): State.ContactsListState => {
      return State.contactsListAdapter.setAll(searchContactsResponse.contacts, {
        ...state,
        loading: false,
        error: '',
        total: searchContactsResponse.total,
      });
    }
  ),
  on(
    ContactsUiActions.loadListFail,
    (state, { error }): State.ContactsListState => {
      return State.contactsListAdapter.removeAll({
        ...state,
        total: 0,
        loading: false,
        error: error.error,
      });
    }
  )
);

export const contactsReducers = combineReducers<State.State>({
  contactsList: contactsListReducer,
});

import * as ContactsState from '../contacts.state';
import * as ContactsSelector from './+contacts.selector';
import { createSelector } from '@ngrx/store';

const { selectAll, selectIds } =
  ContactsState.contactsListAdapter.getSelectors();

const getContactsListState = createSelector(
  ContactsSelector.getContactsFeatureState,
  (state) => state.contactsList
);

export const getContactsIds = createSelector(getContactsListState, selectIds);

export const getContactsList = createSelector(getContactsListState, selectAll);

export const getTotal = createSelector(
  getContactsListState,
  (state) => state.total
);

export const getError = createSelector(
  getContactsListState,
  (state) => state.error
);

export const getLoading = createSelector(
  getContactsListState,
  (state) => state.loading
);

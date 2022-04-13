import { FiltersState } from '../filters.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getFilterFeatureState = createFeatureSelector<FiltersState>('filters');

export const getContactsFilterByFirstName = createSelector(
  getFilterFeatureState,
  (state) => state.contactsFilterByFirstName
);

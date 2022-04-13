import { FiltersState, initialFilterState } from '../filters.state';
import { FilterActions } from '../actions/+index';
import { combineReducers, createReducer, on } from '@ngrx/store';
import { contactsListReducer } from '../../../contacts/+state/reducers/contacts.reducers';

export const filtersReducer = createReducer<FiltersState>(
  initialFilterState,
  on(
    FilterActions.setActivitiesFilterByFirstName,
    (state, filters): FiltersState => {
      return { ...state, contactsFilterByFirstName: filters.firstName };
    }
  )
);

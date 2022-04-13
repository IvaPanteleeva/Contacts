import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ContactForListingType } from '../../shared/types/contacts/contact-for-listing.type';

export interface State {
  contactsList: ContactsListState;
}

export interface ContactsListState extends EntityState<ContactForListingType> {
  contacts: ContactForListingType[];
  total: number;
  error: string;
  loading: boolean;
}

export const contactsListAdapter: EntityAdapter<ContactForListingType> =
  createEntityAdapter<ContactForListingType>();

export const initialContactsListState: ContactsListState =
  contactsListAdapter.getInitialState({
    contacts: [],
    total: 0,
    error: '',
    loading: false,
  });

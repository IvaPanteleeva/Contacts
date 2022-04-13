import { ContactForListingType } from './contact-for-listing.type';

export type SearchContactsType = {
  contacts: Array<ContactForListingType>;
  total: number;
};

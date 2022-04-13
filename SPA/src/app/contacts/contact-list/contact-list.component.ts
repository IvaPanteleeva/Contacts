import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactsApiActions } from '../+state/actions/+index';
import { Observable } from 'rxjs';
import { ContactForListingType } from '../../shared/types/contacts/contact-for-listing.type';
import { ContactsListSelector } from '../+state/selectors/+index';
import { SidebarUiActions } from '../../layouts/+base-state/actions/+index';
import { FilterActions } from '../../filters/+state/actions/+index';
import { FilterSelectors } from '../../filters/+state/selectors/+index';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts$!: Observable<ContactForListingType[]>;
  total$: Observable<number> | undefined;
  search$: Observable<string> | undefined;

  constructor(private store: Store) {
    this.store.dispatch(
      SidebarUiActions.setPageHeaderTitle({ title: 'Contacts' })
    );
  }

  ngOnInit(): void {
    this.loadData();
    this.getData();
  }

  private getData(): void {
    this.contacts$ = this.store.select(ContactsListSelector.getContactsList);
    this.total$ = this.store.select(ContactsListSelector.getTotal);
    this.search$ = this.store.select(
      FilterSelectors.getContactsFilterByFirstName
    );
  }

  private loadData(): void {
    this.store.dispatch(ContactsApiActions.loadList({ shouldReload: false }));
  }

  searchContacts(search: string) {
    this.store.dispatch(
      FilterActions.setActivitiesFilterByFirstName({ firstName: search })
    );
  }
}

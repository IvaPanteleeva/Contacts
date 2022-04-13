import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ContactsApiActions, ContactsUiActions } from '../actions/+index';
import { catchError, filter, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ContactsListSelector } from '../selectors/+index';
import { FilterSelectors } from '../../../filters/+state/selectors/+index';
import { ContactsService } from '../../../shared/services/contacts.service';
import { Router } from '@angular/router';

@Injectable()
export class ContactsEffects {
  constructor(
    public action$: Actions,
    private store: Store,
    private contactsService: ContactsService,
    private router: Router
  ) {}

  loadContactsList$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ContactsApiActions.loadList),
      withLatestFrom(
        this.store.select(ContactsListSelector.getContactsList),
        this.store.select(FilterSelectors.getContactsFilterByFirstName)
      ),
      filter(([_, list]) => _.shouldReload || list.length === 0),
      switchMap(([_, list, searchByName]) =>
        this.contactsService.getContactsList(searchByName).pipe(
          switchMap((data) => {
            return [
              ContactsUiActions.loadListSuccess({
                searchContactsResponse: data,
              }),
            ];
          }),
          catchError((error) =>
            of(
              ContactsUiActions.loadListFail({
                error,
              })
            )
          )
        )
      )
    );
  });

  createContact$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ContactsApiActions.createContact),
      switchMap((_) =>
        this.contactsService.createContact(_.contact).pipe(
          switchMap((data) => {
            return [
              ContactsUiActions.createContactSuccess({
                message: 'Contact created successfully!',
              }),
              ContactsApiActions.loadList({ shouldReload: true }),
            ];
          }),
          tap(() => {
            this.router.navigate(['/contacts/list']);
          }),
          catchError((error) =>
            of(
              ContactsUiActions.createContactFail({
                error,
              })
            )
          )
        )
      )
    );
  });
}

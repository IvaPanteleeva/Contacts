import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { FilterActions } from '../actions/+index';
import { setActivitiesFilterByFirstName } from '../actions/filters-ui.actions';
import { switchMap } from 'rxjs';
import { ContactsApiActions } from '../../../contacts/+state/actions/+index';

@Injectable()
export class FilterEffects {
  constructor(public action$: Actions) {}

  searchActivities$ = createEffect(() => {
    return this.action$.pipe(
      ofType(FilterActions.setActivitiesFilterByFirstName),
      switchMap((_) => {
        return [ContactsApiActions.loadList({ shouldReload: true })];
      })
    );
  });
}

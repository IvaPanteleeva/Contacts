import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { ContactsUiActions } from '../../contacts/+state/actions/+index';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorSuccessEffects {
  constructor(
    public action$: Actions,
    private messageService: MessageService
  ) {}

  successMessages$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(ContactsUiActions.createContactSuccess),
        tap((_) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: _.message,
          });
        })
      ),
    {
      dispatch: false,
    }
  );
  // Error Messages
  errorMessages$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(
          ContactsUiActions.createContactFail,
          ContactsUiActions.loadListFail
        ),
        tap((_) => {
          console.error(_.error);
          this.messageService.add({
            severity: 'Error',
            summary: 'Error',
            detail: _.error.error,
          });
        })
      ),
    {
      dispatch: false,
    }
  );
}

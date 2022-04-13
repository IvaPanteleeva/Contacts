import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { StoreModule } from '@ngrx/store';
import { contactsReducers } from './+state/reducers/contacts.reducers';
import { FiltersModule } from '../filters/filters.module';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './+state/effects/contacts.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactNewComponent, ContactListComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FiltersModule,
    SharedModule,
    StoreModule.forFeature('contacts', contactsReducers),
    EffectsModule.forFeature([ContactsEffects]),
    FormsModule,
  ],
})
export class ContactsModule {}

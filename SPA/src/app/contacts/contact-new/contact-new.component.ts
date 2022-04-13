import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateContactType} from '../../shared/types/contacts/create-contact.type';
import {Store} from '@ngrx/store';
import {SidebarUiActions} from '../../layouts/+base-state/actions/+index';
import {ContactsApiActions} from '../+state/actions/+index';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.scss'],
})
export class ContactNewComponent implements OnInit {
  createContactForm!: FormGroup;
  contactToCreate: CreateContactType | undefined;

  constructor(private store: Store, private fb: FormBuilder) {
    this.store.dispatch(
      SidebarUiActions.setPageHeaderTitle({ title: 'New Contact' })
    );
  }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.createContactForm = this.fb.group({
      firstName: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      address: ['', [Validators.required]],
      iban: ['', [Validators.required]],
      phoneNumber: ['+', [Validators.required]],
    });
  }

  submitForm(): void {
    this.contactToCreate = { ...this.createContactForm.value };
    this.store.dispatch(ContactsApiActions.createContact({contact: this.contactToCreate!}))
  }
}

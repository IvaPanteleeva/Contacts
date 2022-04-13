import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RequestParamsEnum } from '../enums/request-params.enum';
import { SearchContactsType } from '../types/contacts/search-contacts.type';
import { Observable } from 'rxjs';
import { CreateContactType } from '../types/contacts/create-contact.type';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  baseUrl = environment.apiUrl + 'contacts';
  constructor(private http: HttpClient) {}

  getContactsList(firstNameSearch?: string): Observable<SearchContactsType> {
    let params = new HttpParams();

    if (firstNameSearch) {
      params = params.append(RequestParamsEnum.FirstName, firstNameSearch);
    }

    return this.http.get<SearchContactsType>(this.baseUrl, { params });
  }

  createContact(contact: CreateContactType): Observable<string> {
    return this.http.post(this.baseUrl, contact, {
      responseType: 'text',
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customers } from '../models/customers';

const ENDPOINT = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  contacts = new BehaviorSubject<Customers>(null);
  contacts$ = this.contacts.asObservable();

  selectedContact = new BehaviorSubject<Customers>(null);
  selectedContact$ = this.selectedContact.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  shareContacts(data: Customers) {
    /* This function will be called to share customers data  */
    this.contacts.next(data);
  }

  shareSelectedContact(customer: Customers) {
    this.selectedContact.next(customer);
  }

  getCustomers() {
    return new Promise<void>((resolve) => {
    this.httpClient.get<Customers>(`${ENDPOINT}/Customers`)
      .toPromise()
      .then(customers => {
        resolve(this.shareContacts(customers)); 
      }, () => {
       alert(new Error(`Error retraiving Customers Data`).message);
      })
    });
  }
}

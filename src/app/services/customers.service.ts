import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const ENDPOINT = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  contacts = new BehaviorSubject<any>(null);
  contacts$ = this.contacts.asObservable();

  selectedContact = new BehaviorSubject<any>(null);
  selectedContact$ = this.selectedContact.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

 /*  getCustomers(): Observable<any> {
    return this.httpClient.get<any>(`${ENDPOINT}/Customers`);
  }*/

  shareContacts(data: any) {
    /* This function will be called to share customers data  */
    this.contacts.next(data);
  }

  shareSelectedContact(customer: any) {
    this.selectedContact.next(customer);
  }

  getCustomers() {
    let promise = new Promise<void>((resolve, reject) => {
    this.httpClient.get(`${ENDPOINT}/Customers`)
      .toPromise()
      .then(customers => {
        resolve();
        this.shareContacts(customers)
      })
    });
    return promise;
  }
}

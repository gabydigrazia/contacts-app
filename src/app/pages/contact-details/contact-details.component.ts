import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from 'src/app/models/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contactDetails: Customers;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customersService.selectedContact$.subscribe(contact => {
      this.contactDetails = contact;
    })
  }

  backToContacts() {
    this.router.navigate(['/']);
  }

}

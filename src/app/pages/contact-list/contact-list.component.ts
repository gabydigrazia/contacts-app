import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  customers: any[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private customersService: CustomersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.customersService.getCustomers();
    this.customersService.contacts$.subscribe(contacts => {
      this.customers = contacts;
    });
    
  }

  viewDetails(customer) {
    this.customersService.shareSelectedContact(customer);
    this.router.navigate(['/contact-details']);
  }
}

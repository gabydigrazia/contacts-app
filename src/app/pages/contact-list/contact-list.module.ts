import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { ContactListComponent } from './contact-list.component';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class ContactListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ContactDetailsComponent } from './contact-details.component';

@NgModule({
  declarations: [ContactDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ContactDetailsModule { }

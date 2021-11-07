import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactListModule } from './pages/contact-list/contact-list.module';
import { ContactDetailsModule } from './pages/contact-details/contact-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ContactListModule,
    ContactDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

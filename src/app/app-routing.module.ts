import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contact-details', component: ContactDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContactListComponent,
  },
  {
    path: 'new',
    component: ContactNewComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}

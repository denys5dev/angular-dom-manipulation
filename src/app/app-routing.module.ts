import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/components/portal/about/about.component';
import { ContactsComponent } from 'src/app/components/portal/contacts/contacts.component';
import { PortalComponent } from 'src/app/components/portal/portal.component';

const routes: Routes = [
  {
    path: 'portal/about',
    component: AboutComponent,
  },
  {
    path: 'portal/contacts',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

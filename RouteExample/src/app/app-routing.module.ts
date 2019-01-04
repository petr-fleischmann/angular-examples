import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserContactsComponent } from './components/user-contacts/user-contacts.component';
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user-detail', pathMatch: 'full' },
  { path: 'user-detail', component: UserDetailComponent,
    children: [
      { path: '', redirectTo: 'user-contacts', pathMatch: 'full' },
      { path: 'user-contacts', component: UserContactsComponent },
      { path: 'user-addresses', component: UserAddressesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

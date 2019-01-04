import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserContactsComponent } from './components/user-contacts/user-contacts.component';
import { UserAddressesComponent } from './components/user-addresses/user-addresses.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserContactsComponent,
    UserAddressesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

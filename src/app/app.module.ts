import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { ConfirmCheckinComponent } from './confirm-checkin/confirm-checkin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetIdentityComponent,
    EditPersonComponent,
    ClassListComponent,
    ConfirmCheckinComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { ConfirmCheckinComponent } from './confirm-checkin/confirm-checkin.component';
import { VerifyPersonComponent } from './person/verify-person/verify-person.component';
import { PossiblePersonComponent } from './person/verify-person/possible-person/possible-person.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetIdentityComponent,
    EditPersonComponent,
    ClassListComponent,
    ConfirmCheckinComponent,
    PossiblePersonComponent,
    VerifyPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

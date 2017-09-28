import { PersonService } from './person/person.service';
import { WebConnectService } from './web-connect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { SelectedPersonComponent } from './person/selected-person/selected-person.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { VerifyPersonComponent } from './person/verify-person/verify-person.component';
import { PossiblePersonComponent } from './person/verify-person/possible-person/possible-person.component';
import { HomeComponent } from './home/home.component';
import { ClassItemComponent } from './classes/class-list/class-item/class-item.component';
import { ConfirmComponent } from './classes/confirm/confirm.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetIdentityComponent,
    SelectedPersonComponent,
    ClassListComponent,
    PossiblePersonComponent,
    VerifyPersonComponent,
    HomeComponent,
    ClassItemComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [WebConnectService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

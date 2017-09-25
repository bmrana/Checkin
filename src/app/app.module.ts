import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SelectedPersonComponent } from './person/selected-person/selected-person.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { VerifyPersonComponent } from './person/verify-person/verify-person.component';
import { PossiblePersonComponent } from './person/verify-person/possible-person/possible-person.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GetIdentityComponent,
    SelectedPersonComponent,
    ClassListComponent,
    PossiblePersonComponent,
    VerifyPersonComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

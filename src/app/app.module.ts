import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { NameInputComponent } from './name-input/name-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    NameInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

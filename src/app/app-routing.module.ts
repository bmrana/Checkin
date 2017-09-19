import { SelectedPersonComponent } from './person/selected-person/selected-person.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPersonComponent } from './person/verify-person/verify-person.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: GetIdentityComponent },
    { path: 'verify', component: VerifyPersonComponent },
    { path: 'person', component: SelectedPersonComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

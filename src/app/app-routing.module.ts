import { EditPersonComponent } from './person/edit-person/edit-person.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPersonComponent } from './person/verify-person/verify-person.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: GetIdentityComponent },
    { path: 'verify', component: VerifyPersonComponent },
    { path: 'editPerson', component: EditPersonComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

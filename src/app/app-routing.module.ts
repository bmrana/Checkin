import { ConfirmComponent } from './classes/confirm/confirm.component';
import { ClassListComponent } from './classes/class-list/class-list.component';
import { HomeComponent } from './home/home.component';
import { PossiblePersonComponent } from './person/verify-person/possible-person/possible-person.component';
import { SelectedPersonComponent } from './person/selected-person/selected-person.component';
import { GetIdentityComponent } from './person/get-identity/get-identity.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyPersonComponent } from './person/verify-person/verify-person.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'identity', component: GetIdentityComponent, },
    { path: 'person', component: SelectedPersonComponent, children: [
        { path: 'new', component: SelectedPersonComponent },
        { path: 'edit', component: SelectedPersonComponent },
    ] },
    { path: 'verify', component: VerifyPersonComponent },
    { path: 'classes', component: ClassListComponent, },
    { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {}

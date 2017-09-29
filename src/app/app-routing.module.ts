import { PossiblePersonResolver } from './possible-person-resolver.service';
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
    { path: 'person/new', component: SelectedPersonComponent },
    { path: 'person/:id', component: SelectedPersonComponent },
    { path: 'verify', component: VerifyPersonComponent, resolve: {
        possiblePersons: PossiblePersonResolver} },
    { path: 'classes/:id', component: ClassListComponent, },
    { path: 'confirm', component: ConfirmComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [ PossiblePersonResolver ],
})

export class AppRoutingModule {}

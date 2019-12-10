import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {ChoixEnfantComponent} from "./choix-enfant/choix-enfant.component";
import {ErrorRoutingComponent} from './error-routing/error-routing.component';

import {EnfantsComponent} from './enfants/enfants.component';
import {EnfantDetailComponent} from './enfant-detail/enfant-detail.component'
import {EnfantAjoutComponent} from './enfant-ajout/enfant-ajout.component'
import {GestionProfessionnelComponent} from './gestion-professionnel/gestion-professionnel.component'
import {PersonneAjoutComponent} from './personne-ajout/personne-ajout.component'
import {PersonneDetailComponent} from './personne-detail/personne-detail.component'
import{FiltresGestionComponent} from './filtres-gestion/filtres-gestion.component'
import {TestProCommunicationComponent} from './test-pro-communication/test-pro-communication.component'

import {AuthGuardR} from "./guard/responssible.guard";
import {AuthGuardP} from "./guard/parentauth.guard";
import {AuthGuardA} from "./guard/adminauth.guard";
import {AuthGuard} from "./guard/auth.guard";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'choix',
    component: ChoixEnfantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'enfants',
    component: EnfantsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'TestProCommunicationComponent',
    component: TestProCommunicationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inscription',
    component: EnfantAjoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gestionProfessionnel',
    component: GestionProfessionnelComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inscriptionPersonne',
    component: PersonneAjoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: EnfantDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'detailPersonne/:id',
    component: PersonneDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'filtreGestion',
    component: FiltresGestionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: '**',
    component: ErrorRoutingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

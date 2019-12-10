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
import { ConfigurationPartieComponent } from './configuration-partie/configuration-partie.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path:'configuration-partie',
    component: ConfigurationPartieComponent
  },
  {
    path: 'choix',
    component: ChoixEnfantComponent
  },
  {
    path: 'enfants',
    component: EnfantsComponent
  },
  {
    path: 'inscription',
    component: EnfantAjoutComponent
  },
  {
    path: 'gestionProfessionnel',
    component: GestionProfessionnelComponent
  },
  {
    path: 'inscriptionPersonne',
    component: PersonneAjoutComponent
  },
  {
    path: 'detail/:id',
    component: EnfantDetailComponent
  },
  {
    path: 'detailPersonne/:id',
    component: PersonneDetailComponent
  },
  {
    path: 'filtreGestion',
    component: FiltresGestionComponent
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

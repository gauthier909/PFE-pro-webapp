import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginComponent} from "./user-login/user-login.component";
import {ChoixEnfantComponent} from "./choix-enfant/choix-enfant.component";
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {ErrorRoutingComponent} from './error-routing/error-routing.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthGuardA} from './auth/adminauth.guard';
import {AuthGuardP} from './auth/parentauth.guard';
import {AuthGuardR} from './auth/responssible.guard';
import {EnfantsComponent} from './enfants/enfants.component';
import {EnfantDetailComponent} from './enfant-detail/enfant-detail.component'
import {EnfantAjoutComponent} from './enfant-ajout/enfant-ajout.component'
import {GestionProfessionnelComponent} from './gestion-professionnel/gestion-professionnel.component'
import {PersonneAjoutComponent} from './personne-ajout/personne-ajout.component'
import {PersonneDetailComponent} from './personne-detail/personne-detail.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },  {
    path: 'responsable',
    loadChildren: () => import('./responsable/responsable.module').then(mod => mod.ResponsableModule),
    canLoad: [AuthGuardR]
  },
  {
    path: 'professionel',
    loadChildren: () => import('./professionelle/professionelle.module').then(mod => mod.ProfessionelleModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then(mod => mod.ParentModule),
    canLoad: [AuthGuardP]
  },{
    path:'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule),
    canLoad: [AuthGuardA]
  },

  {
    path: 'choix',
    component: ChoixEnfantComponent
  },
  {
    path: 'hello',
    component: HelloWorldComponent
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
    path: '**',
    component: ErrorRoutingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

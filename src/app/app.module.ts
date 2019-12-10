import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ProfessionelleModule} from './professionelle/professionelle.module';
import {AuthRoutingModule} from './auth/auth-routing.module';

import { EnfantsComponent } from './enfants/enfants.component';
import { EnfantDetailComponent } from './enfant-detail/enfant-detail.component';
import { EnfantAjoutComponent } from './enfant-ajout/enfant-ajout.component';

import { UserLoginComponent } from './user-login/user-login.component';
import { ChoixEnfantComponent } from './choix-enfant/choix-enfant.component';
import { ChannelComponent } from './channel/channel.component';
import { ErrorRoutingComponent } from './error-routing/error-routing.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GestionProfessionnelComponent } from './gestion-professionnel/gestion-professionnel.component';
import { PersonneAjoutComponent } from './personne-ajout/personne-ajout.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { ResponsableComponent } from './responsable/responsable/responsable.component';

import { ParentComponent } from './parent/parent/parent.component';
import {ParentRoutingModule} from './parent/parent-routing.module';
import {ResponsableRoutingModule} from './responsable/responsable-routing.module';
import {ParentModule} from './parent/parent.module';
import {ResponsableModule} from './responsable/responsable.module';
import { AdminComponent } from './admin/admin/admin.component';
import {AdminModule} from './admin/admin.module';
import { EnfantRechercheComponent } from './enfant-recherche/enfant-recherche.component';
import { PersonneRechercheComponent } from './personne-recherche/personne-recherche.component';
import { FiltresGestionComponent } from './filtres-gestion/filtres-gestion.component';
import { CreationPartieComponent } from './creation-partie/creation-partie.component';



@NgModule({
  declarations: [
    AppComponent,
   
    UserLoginComponent,
    ChoixEnfantComponent,
    ChannelComponent,
    ErrorRoutingComponent,
    EnfantsComponent,
    EnfantDetailComponent,
    EnfantAjoutComponent,
    GestionProfessionnelComponent,
    PersonneAjoutComponent,
    PersonneDetailComponent,
    ParentComponent,
    EnfantRechercheComponent,
    PersonneRechercheComponent,
    FiltresGestionComponent,
    CreationPartieComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ResponsableModule,
    ParentRoutingModule,
    AdminModule,
    ProfessionelleModule,
    AuthRoutingModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

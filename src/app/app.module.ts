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
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChoixEnfantComponent } from './choix-enfant/choix-enfant.component';
import { ChannelComponent } from './jeu-partie/channel.component';
import { ErrorRoutingComponent } from './error-routing/error-routing.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GestionProfessionnelComponent } from './gestion-professionnel/gestion-professionnel.component';
import { PersonneAjoutComponent } from './personne-ajout/personne-ajout.component';
import { JeuSelectEnfantComponent } from './jeu-select-enfant/jeu-select-enfant.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { EnfantRechercheComponent } from './enfant-recherche/enfant-recherche.component';
import { PersonneRechercheComponent } from './personne-recherche/personne-recherche.component';
import { FiltresGestionComponent } from './filtres-gestion/filtres-gestion.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserLoginComponent,
    ChoixEnfantComponent,
    ChannelComponent,
    ErrorRoutingComponent,
    EnfantsComponent,
    EnfantDetailComponent,
    EnfantAjoutComponent,
    GestionProfessionnelComponent,
    PersonneAjoutComponent,
    JeuSelectEnfantComponent,
    PersonneDetailComponent,
    EnfantRechercheComponent,
    PersonneRechercheComponent,
    FiltresGestionComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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

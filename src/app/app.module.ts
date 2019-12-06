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
import { ErrorRoutingComponent } from './error-routing/error-routing.component';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserLoginComponent,
    ChoixEnfantComponent,
    ErrorRoutingComponent,
    EnfantsComponent,
    EnfantDetailComponent,
    EnfantAjoutComponent

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

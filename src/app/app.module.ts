import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChoixEnfantComponent } from './choix-enfant/choix-enfant.component';
import { ErrorRoutingComponent } from './error-routing/error-routing.component';
import {ProfessionelleModule} from './professionelle/professionelle.module';
import {AuthRoutingModule} from './auth/auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserLoginComponent,
    ChoixEnfantComponent,
    ErrorRoutingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProfessionelleModule,
    AuthRoutingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

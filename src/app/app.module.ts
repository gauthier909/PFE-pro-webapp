import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ChoixEnfantComponent } from './choix-enfant/choix-enfant.component';
import { ErrorRoutingComponent } from './error-routing/error-routing.component';
import { EnfantsComponent } from './enfants/enfants.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserLoginComponent,
    ChoixEnfantComponent,
    ErrorRoutingComponent,
    EnfantsComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

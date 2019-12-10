import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Input} from "@angular/core";
import { User } from '../../classes/user';
import {decode} from 'punycode';
import {LoginService} from "../../services/login.service";
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [LoginService]
})
export class UserLoginComponent implements OnInit {

  constructor(public authservice: AuthService, public router: Router, private logserv:LoginService) { }
  user;
  password;
  token;
  submitted = false;
  onSubmit() {
    console.log("test billy")

    this.logserv.login(this.user,this.password).subscribe(data =>{
        if(data.success){
          console.log(data);
          console.log(data);
          localStorage.setItem('role', data.user.role);
          localStorage.setItem('user',JSON.stringify(data.user));
          this.login(data.user.role);
        }
      }
    );
    /*
    let jason = {email: this.user, password: this.password}
    fetch('http://localhost:8080/auth/login',{
      method: 'POST',
      body: JSON.stringify(jason)
    })
      .then(response => response.clone().json()
      )
      .then(token => {
        console.log( 'Recieved data from Express API :' , token)
        this.token = token;
        console.log(token);
        localStorage.setItem('token', token);
        this.login();
      })
      .catch(err => {
        console.error("Error :", err)

      });*/
  }
  getDecodedAccessToken() {


  }

  onSetLogin(){
    this.user= (event.target as HTMLInputElement).value;

  }
  onSetPassword(){
    this.password=(event.target as HTMLInputElement).value;
  }
  login(role) {
    if(role =='Responsable' ) {
      this.authservice.loginResponsible().subscribe(() => {
        console.log('this is billy')
        if (this.authservice.isResponssible) {
          console.log("estResponssible")
          //let redirect = this.authservice.redirectUrl ? this.router.parseUrl(this.authservice.redirectUrl) : '/professionel';

          let navigationExras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          this.router.navigate(['responsable'], navigationExras);
        }
      });
    }if (role == 'Parent') {
      this.authservice.loginParent().subscribe(() => {
          if (this.authservice.isParent) {
            console.log("parentredirect");
            let navigationExras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };

            this.router.navigate(['parent'], navigationExras);
          }
        }

      );
    } if (role == 'Administrateur') {
      this.authservice.loginAdmin().subscribe(() => {
          if (this.authservice.isAdmin) {
            console.log("adminredirect");
            let navigationExras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };

            this.router.navigate(['admin'], navigationExras);
          }
        }

      );
    }if(role == 'Professionnel'){
      this.authservice.loginProfesionel().subscribe(() =>{
        let navigationExras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate(['choix'], navigationExras);
      });
    }
    console.log(this.authservice.isResponssible+"  est tu vrais ?");
  }
  logout(){
    this.authservice.logout();
    this.submitted=false;

  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {Input} from "@angular/core";
import { User } from '../user';
import {decode} from 'punycode';

@Component({
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public authservice: AuthService, public router: Router) { }
  user;
  password;
  token;
  submitted = false;
  onSubmit() {
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

      });
  }
  onSetLogin(){
    this.user= (event.target as HTMLInputElement).value;

  }
  onSetPassword(){
    this.password=(event.target as HTMLInputElement).value;
  }
    login() {
     this.authservice.login().subscribe(() => {
        if (this.authservice.isLoggedIn) {
          //let redirect = this.authservice.redirectUrl ? this.router.parseUrl(this.authservice.redirectUrl) : '/professionel';

          let navigationExras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          this.router.navigate(['professionel'], navigationExras);
        }
      });
    }
    logout(){
       this.authservice.logout();
       this.submitted=false;
       localStorage.removeItem('token');
    }
  ngOnInit() {
  }

}

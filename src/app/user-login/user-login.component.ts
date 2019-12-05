import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import { User } from '../user';
@Component({
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }
  login;
  password;

  submitted = false;
  onSubmit() {
    let jason = {login: this.login,password: this.password}
    fetch('http://localhost:8080/login',{
      method: "POST",
      body: JSON.stringify(jason)
    })
      .then(response => response.clone().json()
      )
      .then(data => {
        console.log("Recieved data from Express API :", data)
        data = data
      })
      .catch(err => {
        console.error("Error :", err)
      })
  }
  onSetLogin(){
    this.login= (event.target as HTMLInputElement).value;

  }
  onSetPassword(){
    this.password=(event.target as HTMLInputElement).value;
  }
  ngOnInit() {
  }

}

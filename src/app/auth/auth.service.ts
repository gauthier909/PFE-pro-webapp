import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private http: HttpClient){}

    signup(email: string, password: string){
        // this.http.post('http://localhost:8080/auth', {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // })
    }

    login(){

    }
}
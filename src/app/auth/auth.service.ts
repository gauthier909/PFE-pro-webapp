import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;
  isResponssible = false;
  isParent = false;
  redirectUrl: string;
  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }
  loginAdmin(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap( val => this.isAdmin = true)
    );
  }
  loginResponsible(): Observable<boolean>{
    console.log("AAAAAAAAAAH")
    return of(true).pipe(
      delay(1000),
      tap(val => this.isResponssible=true)
    );
  }
  loginParent(): Observable<boolean>{
    return of(true).pipe(
      delay(1000),
      tap( val => this.isParent = true)
    );
  }
  logout(): void {
    this.isLoggedIn = false;
    this.isResponssible=false;
    this.isParent=false;
    this.isAdmin=false;
  }
  constructor() { }



}

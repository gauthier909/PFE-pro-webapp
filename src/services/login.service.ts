import  {Inject, Injectable} from "@angular/core";
import {HttpClient,HttpHeaders,HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LoginService{
  constructor(private http: HttpClient) {}
  login(email: string, password: string):Observable<any> {
    return this.http.post<any>('http://localhost:8080/login', { email:email, password:password })
      .pipe(map(user => {
        console.log(user);
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          console.log('i have a user-token');
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token-user', JSON.stringify(user.token));
        }

        return user;
      }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private roleUrl = 'http://localhost:8080/roles';

  private roles : Observable<string[]>;
  constructor(private http: HttpClient ) { }


  getRoles(): Observable<string[]>{
    this.roles = this.http.get<string[]>(this.roleUrl)
    .pipe(
      tap(_ => console.log('fetched roles')),
      catchError(this.handleError<string[]>('getRoles', []))
    );
    return this.roles;

    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

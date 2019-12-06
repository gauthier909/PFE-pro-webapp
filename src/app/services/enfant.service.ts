import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

//import { ENFANTS } from '../../mocks/mock-enfants';
import { Enfant } from '../enfants/enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private enfantsUrl = 'http://localhost:8080/enfants';  // URL to web api
  private detailsUrl = 'http://localhost:8080/details';
  private enfants :  Observable<Enfant[]>;
  constructor(private http: HttpClient ) { }

  getEnfants(): Observable<Enfant[]> {
    //return of(ENFANTS);
    this.enfants = this.http.get<Enfant[]>(this.enfantsUrl)
    .pipe(
      tap(_ => console.log('fetched enfants')),
      catchError(this.handleError<Enfant[]>('getEnfants', []))
    );
    return this.enfants;
  }

  getEnfant(id: string): Observable<Enfant>{
    //return of(ENFANTS.find(enfant => enfant._id === id));
    const url = `${this.enfantsUrl}/${id}`;
    console.log(id);
    return this.http.get<Enfant>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Enfant>(`getEnfant id=${id}`))
    );
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

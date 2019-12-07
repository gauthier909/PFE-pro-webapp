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
  
  private enfants :  Observable<Enfant[]>;
  constructor(private http: HttpClient ) { }

 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Get all children 
  getEnfants(): Observable<Enfant[]> {
    //return of(ENFANTS);
    this.enfants = this.http.get<Enfant[]>(this.enfantsUrl)
    .pipe(
      tap(_ => console.log('fetched enfants')),
      catchError(this.handleError<Enfant[]>('getEnfants', []))
    );
    return this.enfants;
  }

  // Get children with ID
  getEnfant(id: string): Observable<Enfant>{
    //return of(ENFANTS.find(enfant => enfant._id === id));
    const url = `${this.enfantsUrl}/${id}`;
    console.log(id);
    return this.http.get<Enfant>(url).pipe(
      tap(_ => console.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Enfant>(`getEnfant id=${id}`))
    );
  }
  
  // Update children with ID
  updateEnfant(enfant : Enfant): Observable<any>{
    const url = `${this.enfantsUrl}/${enfant._id}`;
    console.log("On veut update",enfant._id)

    return this.http.put(url,enfant, this.httpOptions).pipe(
      tap(_ => console.log(`updated enfant with id id=${enfant._id}`)),
      catchError(this.handleError<any>('updateEnfant'))
    );
  }

  deleteEnfant(enfant : Enfant): Observable<Enfant>{
    console.log("On veut delete",enfant._id);

    const url = `${this.enfantsUrl}/${enfant._id}`;
    return this.http.delete<Enfant>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${enfant._id}`)),
      catchError(this.handleError<Enfant>('deleteEnfant'))
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

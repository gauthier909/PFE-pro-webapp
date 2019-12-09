import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Filtre } from '../classes/filtre'

@Injectable({
  providedIn: 'root'
})
export class FiltreService {

  private filtresUrl = 'http://localhost:8080/filtres';
  private filtres : Observable<Filtre[]>;

  constructor(private http: HttpClient) { }


  // Return tout les filtres
  getFiltres(): Observable<Filtre[]>{
    this.filtres = this.http.get<Filtre[]>(this.filtresUrl)
    .pipe(
      tap(_ => console.log('fetched besoins')),
      catchError(this.handleError<Filtre[]>('getFiltres', []))
    );
    return this.filtres;

    
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

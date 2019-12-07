import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Personne} from '../gestion-professionnel/personne'

@Injectable({
  providedIn: 'root'
})
export class GestionProfessionnelService {
  private personnesUrl = 'http://localhost:8080/personne'

  private personnes : Observable<Personne[]>;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPersonnes():Observable<Personne[]>{ //return all personnes
    this.personnes = this.http.get<Personne[]>(this.personnesUrl)
    .pipe(
      tap(_ => console.log('fetched personnes')),
      catchError(this.handleError<Personne[]>('getPersonne', []))
    );
    return this.personnes
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

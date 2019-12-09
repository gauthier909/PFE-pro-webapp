import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BesoinsService {
  private besoinsUrl = 'http://localhost:8080/besoins';

  private besoins : Observable<string[]>;
 
  constructor(private http: HttpClient ) { }

  getBesoins(): Observable<string[]>{
    this.besoins = this.http.get<string[]>(this.besoinsUrl)
    .pipe(
      tap(_ => console.log('fetched besoins')),
      catchError(this.handleError<string[]>('getBesoins', []))
    );
    return this.besoins;

    
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

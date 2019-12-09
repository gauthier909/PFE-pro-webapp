import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DominanceService {
  private dominancesUrl = 'http://localhost:8080/dominances';

  private dominances : Observable<string[]>;
 
  constructor(private http: HttpClient ) { }

  getBesoins(): Observable<string[]>{
    this.dominances = this.http.get<string[]>(this.dominancesUrl)
    .pipe(
      tap(_ => console.log('fetched dominances')),
      catchError(this.handleError<string[]>('getDominances', []))
    );
    return this.dominances;
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



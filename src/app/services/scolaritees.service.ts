import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScolariteesService {
  private scolariteesUrl = 'http://localhost:8080/scolaritees';

  private scolaritees : Observable<string[]>;
 
  constructor(private http: HttpClient ) { }

  getScolaritees(): Observable<string[]>{
    this.scolaritees = this.http.get<string[]>(this.scolariteesUrl)
    .pipe(
      tap(_ => console.log('fetched scolaritees')),
      catchError(this.handleError<string[]>('getScolaritees', []))
    );
    return this.scolaritees;
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

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RelationsService {
  private relationsUrl = 'http://localhost:8080/relations';

  private relations : Observable<string[]>;
 
  constructor(private http: HttpClient ) { }

  getRelations(): Observable<string[]>{
    this.relations = this.http.get<string[]>(this.relationsUrl)
    .pipe(
      tap(_ => console.log('fetch relations')),
      catchError(this.handleError<string[]>('get relations', []))
    );
    return this.relations;
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

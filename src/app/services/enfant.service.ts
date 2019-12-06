import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ENFANTS } from '../mock-enfants';
import { Enfant } from '../enfants/enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  constructor() { }

  getEnfants(): Observable<Enfant[]> {
    return of(ENFANTS);
  }

  getEnfant(id: string): Observable<Enfant>{
    return of(ENFANTS.find(enfant => enfant.id === id));
  }
}

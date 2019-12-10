import { Scolarite } from './scolarite';

export class Enfant {
    _id: number;
    nom: string;
    prenom: string;
    date_naissance: Date;
    langue_usuelle: string;
    dominance: string;
    scolarite: Scolarite;
    contacts: Array<Object>;
    besoins: Array<string>;
    professionnel: string;
  }
  
  
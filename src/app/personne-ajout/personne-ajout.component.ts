import { Component, OnInit } from '@angular/core';
import {Personne} from '../gestion-professionnel/personne'
import {GestionProfessionnelService} from '../services/gestion-professionnel.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-personne-ajout',
  templateUrl: './personne-ajout.component.html',
  styleUrls: ['./personne-ajout.component.css']
})
export class PersonneAjoutComponent implements OnInit {
  

  constructor(private gestionProService: GestionProfessionnelService,private location: Location) { }

  ngOnInit() {
  }

  add(password:string,nom: string, prenom: string, profession:string,telephone:string,email:string,role:string): void {
    // trim() => remove whitespace
    nom = nom.trim();
    prenom = prenom.trim();
    if (!nom){
      return;
    }
    this.gestionProService.addPersonne({password,nom, prenom, profession,telephone,email,role} as Personne)
      .subscribe(personne => {
        this.goBack()
      })
  }

  goBack(): void{
    this.location.back();
  }

}

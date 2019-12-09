import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import {RoleService} from '../../services/role.service'
import {Personne} from '../../classes/personne'
import {GestionProfessionnelService} from '../../services/gestion-professionnel.service'
@Component({
  selector: 'app-personne-ajout',
  templateUrl: './personne-ajout.component.html',
  styleUrls: ['./personne-ajout.component.css']
})
export class PersonneAjoutComponent implements OnInit {
  roles: string[];
  

  constructor(
    private gestionProService: GestionProfessionnelService,
    private location: Location,
    private roleService : RoleService
    ) { }

  ngOnInit() {
    this.getRoles();
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
  
  getRoles():void{
    this.roleService.getRoles().subscribe(roles => this.roles = roles)
    console.log(this.roles);
  }

  goBack(): void{
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import {GestionProfessionnelService} from '../services/gestion-professionnel.service'
import {Personne} from '../gestion-professionnel/personne'

@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styleUrls: ['./personne-detail.component.css']
})
export class PersonneDetailComponent implements OnInit {
  personne: Personne;

  constructor(private route: ActivatedRoute,private gestionProService:GestionProfessionnelService, private location:Location) { }

  ngOnInit() {
    this.getPersonne();
  }

  getPersonne():void{
    let id = this.route.snapshot.paramMap.get('id');
    this.gestionProService.getPersonne(id).subscribe(personne => this.personne = personne)
  }

  updatePersonne():void{
    this.gestionProService.updatePersonne(this.personne).subscribe(()=> this.goBack());
  }

  deletePersonne():void{
    this.gestionProService.deletePersonne(this.personne).subscribe(()=> this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}

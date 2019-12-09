import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { EnfantService } from '../../services/enfant.service'
import { Enfant } from '../../classes/enfant'
import { Observable } from 'rxjs';


import {ListeDonneesService} from '../../services/liste-donnees.service'

@Component({
  selector: 'app-enfant-detail',
  templateUrl: './enfant-detail.component.html',
  styleUrls: ['./enfant-detail.component.css']
})
export class EnfantDetailComponent implements OnInit {
  besoins: string[];
  enfant: Enfant;
  dominances: string[];
  scolaritees: string[];
  relations: string[];

  dataarray=[];

  constructor(
    private route: ActivatedRoute,
    private enfantService: EnfantService,
    private location: Location,
    private listeDonneesService : ListeDonneesService,
  ) { }

  ngOnInit() {
    this.getEnfant();
    this.getBesoins();
    this.getDominances();
    this.getScolaritees();
    this.getRelations();

  }

  ajouterContact(){
    this.dataarray.push({
        prenom:'',
        nom:'',
        telephone:'',
        email:'',
        relation:''
    });
  }

  supprimerContact(index){
    this.enfant.contacts.splice(index);
  }

  supprimerChamp(index){
    this.dataarray.splice(index);
  }

  getRelations() {
    this.listeDonneesService.getRelations().subscribe(relations => this.relations = relations);
  }
  getScolaritees() {
    this.listeDonneesService.getScolaritees().subscribe(scolaritees => this.scolaritees = scolaritees);
  }

  getDominances() {
    this.listeDonneesService.getDominances().subscribe(dominances => this.dominances = dominances);
  }

  getEnfant(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.enfantService.getEnfant(id).subscribe(enfant => this.enfant = enfant);
  }
  modifEnfant(): void {

    //recuperation des checkbox qui ont ete cochés
    let elements = (<HTMLInputElement[]><any>document.getElementsByName("besoins"));
    let tab = new Array<string>();
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == "checkbox" && elements[i].checked) {
        tab.push(elements[i].value);
      }
    }
    this.enfant.besoins = tab;
    for(let i=0;i<this.dataarray.length;i++){
      this.enfant.contacts.push(this.dataarray[i]);
    }

    let ajoutContacts=(<HTMLInputElement[]><any>document.getElementsByName("info_contact_plus"));
    console.log(ajoutContacts);

    this.enfantService.updateEnfant(this.enfant).subscribe(() => this.goBack());
  }
  getBesoins(): void {
    this.listeDonneesService.getBesoins().subscribe(besoins => this.besoins = besoins)
  }

  deleteEnfant(): void {
    this.enfantService.deleteEnfant(this.enfant).subscribe(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }

 
}

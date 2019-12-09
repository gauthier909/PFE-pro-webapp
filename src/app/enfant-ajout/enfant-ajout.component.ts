import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import {ListeDonneesService} from '../../services/liste-donnees.service'
import { Contact } from '../../classes/contact';
import {EnfantService} from '../../services/enfant.service'
import { Enfant } from '../../classes/enfant';

@Component({
  selector: 'app-enfant-ajout',
  templateUrl: './enfant-ajout.component.html',
  styleUrls: ['./enfant-ajout.component.css']
})
export class EnfantAjoutComponent implements OnInit {
  dominances:string[];
  scolaritees:string[];
  relations:string[];
  besoins:string[];
  contact=new Contact();
  dataarray=[];

  typeE='';
  autreBesoin:'';


  selectedBesoins:string[]=[''];
  selectedEnseignement:string='ordinaire';

  constructor(private route: ActivatedRoute,
    private enfantService: EnfantService,
    private listeDonneesServices:ListeDonneesService,
    private location: Location
    ) {
   }

  ngOnInit() {
    this.getDominances();
    this.getScolaritees();
    this.getRelations();
    this.getBesoins();
    this.contact=new Contact();
    this.dataarray.push(
      this.contact
    );
  }
  
  supprimerChamp(index){
    this.dataarray.splice(index);
  }

  ajouterContact(){
    this.contact=new Contact();
    this.dataarray.push(this.contact);
  }

  onEnseignementSelected(event){
    console.log(event);
  }

  getRelations() {
    this.listeDonneesServices.getRelations().subscribe(relations => this.relations = relations);
  }
  getScolaritees() {
    this.listeDonneesServices.getScolaritees().subscribe(scolaritees => this.scolaritees = scolaritees);
  }

  getBesoins(): void {
    this.listeDonneesServices.getBesoins().subscribe(besoins => this.besoins = besoins)
  }

  getDominances(){
    this.listeDonneesServices.getDominances().subscribe(dominances=>this.dominances=dominances);
  }


  //bug avec le type,relation quand on en choisit pas +autre ==> ngIf
  add(nom: string, prenom: string, date_naissance: Date, langue_usuelle:string,
    dominance:string,_enseignement:string,_niveau:string,professionnel:string
    ): void {
    // trim() => remove whitespace
    nom = nom.trim();
    prenom = prenom.trim();
    if (!nom){
      return;
    }
    
    //assignation du tableau des diff contacts à la variable contact (utile pour le service)
    let contacts= this.dataarray;
    
    //remplissage de l'objet scolarite avec les differents input 
    let scolarite={
      enseignement:_enseignement,
      niveau:_niveau,
      type:this.typeE
    }

    //ajout du besoin autre (input) dans la liste des besoins de l'enfant
    if(this.selectedBesoins.indexOf('Autre')>=0){
      this.selectedBesoins.pop();
      this.selectedBesoins.push(this.autreBesoin);
    }
    let besoins=this.selectedBesoins;
    
    //requete au service
    this.enfantService.addEnfant({nom, prenom, date_naissance,
      langue_usuelle,dominance,scolarite,contacts,besoins,professionnel} as Enfant)
      .subscribe(enfant => {
        this.goBack()
      })
      //remet la liste des contacts (form) à 0
      this.dataarray=null;
  }

  goBack(): void{
    this.location.back();
  }

}

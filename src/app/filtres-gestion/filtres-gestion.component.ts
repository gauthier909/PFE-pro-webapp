import { Component, OnInit } from '@angular/core';
import { Filtre } from './filtre'
import {FiltreService } from '../services/filtre.service'

@Component({
  selector: 'app-filtres-gestion',
  templateUrl: './filtres-gestion.component.html',
  styleUrls: ['./filtres-gestion.component.css']
})
export class FiltresGestionComponent implements OnInit {
  filtres: Filtre[];
  fitresFinal:Filtre[];
 
  constructor(private filtreService : FiltreService ) { }

  ngOnInit() {
    this.getFiltres();
  }

  getFiltres() : void {
    this.filtreService.getFiltres().subscribe(filtres =>{
      this.filtres = filtres
      //console.log(filtres)
    })
    this.filtreService.getFiltres().subscribe(filtres =>{
      this.fitresFinal = filtres
      //console.log(filtres)
    })
   }

  supprimerFiltre(){

    this.filtres.pop();
  
   }

   filtreParDefaut(){
     this.getFiltres()
     this.lancerPartie()
   }

   lancerPartie(){
     console.log('Lancement de partie avec le tableau de filtres:')
     console.log(this.fitresFinal)
   }

   changeFiltre0(value){
    //console.log(value)
    var splitted = value.split("-")
   // console.log(splitted)
    let filtre:Filtre={
      filtrePositif:splitted[0],
      filtreNegatif:splitted[1]
    }
    this.fitresFinal[0]=filtre;
    console.log(this.filtres)
   }
   
   
   changeFiltre1(value){
    var splitted = value.split("-")
    let filtre:Filtre={
      filtrePositif:splitted[0],
      filtreNegatif:splitted[1]
    }
    this.fitresFinal[1]=filtre;
    console.log(this.filtres)
   }
   
   
   changeFiltre2(value){
    var splitted = value.split("-")
    let filtre:Filtre={
      filtrePositif:splitted[0],
      filtreNegatif:splitted[1]
    }
    this.fitresFinal[2]=filtre;
    console.log(this.filtres)
   }

}

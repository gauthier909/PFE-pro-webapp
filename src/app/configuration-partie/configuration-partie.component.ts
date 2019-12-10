import { Component, OnInit, Renderer } from '@angular/core';
import { ListeDonneesService } from 'src/services/liste-donnees.service';
import { Filtre } from 'src/classes/filtre';

@Component({
  selector: 'app-configuration-partie',
  templateUrl: './configuration-partie.component.html',
  styleUrls: ['./configuration-partie.component.css']
})
export class ConfigurationPartieComponent implements OnInit {

  filtres: Filtre[];
  fitresFinal:Filtre[];

  constructor(
    private listeDonneesService : ListeDonneesService,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.getFiltres();
  }
  getFiltres() : void {
    this.listeDonneesService.getFiltres().subscribe(filtres =>{
      this.filtres = filtres
      //console.log(filtres)
    })
    this.listeDonneesService.getFiltres().subscribe(filtres =>{
      this.fitresFinal = filtres
      //console.log(filtres)
    })
   }

  supprimerFiltre0(){
    let element = (document.getElementById('filtre0'))
    console.log(element)
    element.remove()
    this.fitresFinal.splice(0,1)
  }
  supprimerFiltre1(){
    let element = (document.getElementById('filtre1'))
    console.log(element)
    element.remove()
    this.fitresFinal.splice(1,1)
  }
  supprimerFiltre2(){
    let element = (document.getElementById('filtre2'))
    console.log(element)
    element.remove()
    this.fitresFinal.splice(2,1)
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
     console.log(this.fitresFinal)
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

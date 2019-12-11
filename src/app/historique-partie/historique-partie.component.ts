import { Component, OnInit } from '@angular/core';
import { Enfant } from 'src/classes/enfant';
import { EnfantService } from 'src/services/enfant.service';
import { ListeDonneesService } from 'src/services/liste-donnees.service';
import { Jeu } from 'src/classes/jeu';

@Component({
  selector: 'app-historique-partie',
  templateUrl: './historique-partie.component.html',
  styleUrls: ['./historique-partie.component.css']
})
export class HistoriquePartieComponent implements OnInit {

  jeux: Jeu[]
  jeu: Jeu
  listeEnfants: Enfant[]
  afficherEnfants : boolean
  afficherListeJeux: boolean
  afficherJeu: boolean
  constructor(private enfantService: EnfantService,
    private listeDonneesService: ListeDonneesService) { }

  ngOnInit() {
    this.getListeEnfants()
  }

  getListeEnfants(){
    this.enfantService.getEnfants().subscribe(enfants => this.listeEnfants = enfants)
    this.afficherEnfants = true
  }

  onSelectEnfant(enfant: Enfant){
    this.getHistoriqueEnfant(enfant)
    this.afficherListeJeux = true
    this.afficherEnfants = false
  }

  onSelectJeu(jeu: Jeu){
    this.jeu = jeu
    this.afficherJeu = true
  }

  onBackEnfants(afficherEnfants: boolean){
    this.afficherEnfants = !afficherEnfants
    this.afficherListeJeux = false
  }
  
  onBackJeux(afficherListeJeux: boolean){
    this.afficherListeJeux = ! afficherListeJeux
    this.afficherJeu = false
  }
  
  getHistoriqueEnfant(enfant: Enfant){
    this.listeDonneesService.getJeux(enfant).subscribe(jeux => this.jeux = jeux)
  }

  getEnfantID(){
    if(localStorage.getItem('user')!=undefined) {
      return JSON.parse(localStorage.getItem('user')).idEnfant;
    }
  }


}

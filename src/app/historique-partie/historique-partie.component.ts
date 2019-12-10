import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historique-partie',
  templateUrl: './historique-partie.component.html',
  styleUrls: ['./historique-partie.component.css']
})
export class HistoriquePartieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getEnfantID(){
    if(localStorage.getItem('user')!=undefined) {
      return JSON.parse(localStorage.getItem('user')).idEnfant;
    }
  }


}

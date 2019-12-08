import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

import {EnfantService} from '../services/enfant.service'
import { Enfant } from '../enfants/enfant';

@Component({
  selector: 'app-enfant-ajout',
  templateUrl: './enfant-ajout.component.html',
  styleUrls: ['./enfant-ajout.component.css']
})
export class EnfantAjoutComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,
    private enfantService: EnfantService,
    private location: Location) {
   }

  ngOnInit() {
  }

  add(nom: string, prenom: string, date_naissance: Date): void {
    // trim() => remove whitespace
    nom = nom.trim();
    prenom = prenom.trim();
    if (!nom){
      return;
    }
    this.enfantService.addEnfant({nom, prenom, date_naissance} as Enfant)
      .subscribe(enfant => {
        this.goBack()
      })
  }

  goBack(): void{
    this.location.back();
  }

}

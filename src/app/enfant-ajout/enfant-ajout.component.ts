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
  isOn : boolean
  constructor(private route: ActivatedRoute,
    private enfantService: EnfantService,
    private location: Location) {
    this.isOn = false;
   }

  ngOnInit() {
  }

  add(nom: string, prenom: string, dateNaissance: Date): void {
    // trim() => remove whitespace
    nom = nom.trim();
    prenom = prenom.trim();
    if (!nom){
      return;
    }
    this.enfantService.addEnfant({nom, prenom, dateNaissance} as Enfant)
      .subscribe(enfant => {
        this.goBack()
      })
  }

  goBack(): void{
    this.location.back();
  }

}
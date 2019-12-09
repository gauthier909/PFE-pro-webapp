import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

import {EnfantService} from '../services/enfant.service'
import { Enfant } from '../enfants/enfant';

@Component({
  selector: 'app-jeu-select-enfant',
  templateUrl: './jeu-select-enfant.component.html',
  styleUrls: ['./jeu-select-enfant.component.css']
})
export class JeuSelectEnfantComponent implements OnInit {

  constructor(
    private enfantService: EnfantService,
    private location: Location) { }

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

  goBack(): void {
    this.location.back()
  }

}

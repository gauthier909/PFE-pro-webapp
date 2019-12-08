import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { EnfantService } from '../services/enfant.service'
import {BesoinsService} from '../services/besoins.service'
import { Enfant } from '../enfants/enfant'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enfant-detail',
  templateUrl: './enfant-detail.component.html',
  styleUrls: ['./enfant-detail.component.css']
})
export class EnfantDetailComponent implements OnInit {
  besoins: string[];
  enfant: Enfant;

  constructor(
    private route: ActivatedRoute,
    private enfantService: EnfantService,
    private location: Location,
    private besoinService: BesoinsService
    ) {  }

  ngOnInit() {
    this.getEnfant();
    this.getBesoins();
  }


  getEnfant(): void{
    let id = this.route.snapshot.paramMap.get('id');
    this.enfantService.getEnfant(id).subscribe(enfant => this.enfant = enfant);
  }
  modifEnfant(): void{

    let elements = (<HTMLInputElement[]><any>document.getElementsByName("besoins"));

    let tab= new Array<string>();
    for(let i=0;i<elements.length;i++){
      if (elements[i].type == "checkbox" && elements[i].checked) {
        tab.push(elements[i].value);
      }
    }
    this.enfant.besoins=tab;

    this.enfantService.updateEnfant(this.enfant).subscribe(()=> this.goBack());
  }
  getBesoins():void{
    this.besoinService.getBesoins().subscribe(besoins => this.besoins = besoins)
  }

  deleteEnfant(): void{
    this.enfantService.deleteEnfant(this.enfant).subscribe(()=> this.goBack())
  }

  goBack(): void{
    this.location.back();
  }

  ajouterContact():void{

  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { EnfantService } from '../services/enfant.service'
import { Enfant } from '../enfants/enfant'

@Component({
  selector: 'app-enfant-detail',
  templateUrl: './enfant-detail.component.html',
  styleUrls: ['./enfant-detail.component.css']
})
export class EnfantDetailComponent implements OnInit {
  enfant: Enfant;
  constructor(
    private route: ActivatedRoute,
    private enfantService: EnfantService,
    private location: Location
    ) { }

  ngOnInit() {
    this.getEnfant();
  }

  getEnfant(): void{
    let id = this.route.snapshot.paramMap.get('id');
    this.enfantService.getEnfant(id).subscribe(enfant => this.enfant = enfant);
  }
  modifEnfant(): void{
    this.enfantService.updateEnfant(this.enfant).subscribe(()=> this.goBack())
  }
  deleteEnfant(): void{
    this.enfantService.deleteEnfant(this.enfant).subscribe(()=> this.goBack())
  }
  goBack(): void{
    this.location.back();
  }
  ajouterBesoin(): void{
    
  }
  ajouterContact():void{

  }
}

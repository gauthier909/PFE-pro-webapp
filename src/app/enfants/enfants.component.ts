import { Component, OnInit } from '@angular/core';
import {Enfant } from '../../classes/enfant'
//import {ENFANTS} from '../../mocks/mock-enfants'
import {EnfantService} from '../../services/enfant.service'


@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})
export class EnfantsComponent implements OnInit {
  enfants : Enfant[];
  constructor(private enfantService : EnfantService) { }

  ngOnInit() {
    this.getEnfants();
  }
  getEnfants() : void {
   this.enfantService.getEnfants().subscribe(enfants => this.enfants = enfants)
  }
}

import { Component, OnInit } from '@angular/core';
import {Enfant } from './enfant'
import {ENFANTS} from '../mock-enfants'

@Component({
  selector: 'app-enfants',
  templateUrl: './enfants.component.html',
  styleUrls: ['./enfants.component.css']
})
export class EnfantsComponent implements OnInit {
  enfants = ENFANTS;
  selectedEnfant: Enfant;
  constructor() { }

  ngOnInit() {

  }
  delete(enfant : Enfant):void{
    this.enfants = this.enfants; // todo
  }
  onSelect(enfant: Enfant): void {
    this.selectedEnfant = enfant;
  }

}

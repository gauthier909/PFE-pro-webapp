import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enfant-ajout',
  templateUrl: './enfant-ajout.component.html',
  styleUrls: ['./enfant-ajout.component.css']
})
export class EnfantAjoutComponent implements OnInit {
  isOn : boolean
  constructor() {
    this.isOn = false;
   }

  ngOnInit() {
  }

}

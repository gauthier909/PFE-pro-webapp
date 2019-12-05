import { Component, OnInit, Input } from '@angular/core';
import { Enfant } from '../enfants/enfant'

@Component({
  selector: 'app-enfant-detail',
  templateUrl: './enfant-detail.component.html',
  styleUrls: ['./enfant-detail.component.css']
})
export class EnfantDetailComponent implements OnInit {
   @Input() enfant: Enfant;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { allchoix } from '../choix';
@Component({
  selector: 'app-choix-enfant',
  templateUrl: './choix-enfant.component.html',
  styleUrls: ['./choix-enfant.component.css']
})
export class ChoixEnfantComponent implements OnInit {
  allchoix = allchoix;
  constructor() { }

  ngOnInit() {
  }

}

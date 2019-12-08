import { Component, OnInit } from '@angular/core';
import { Filtre } from './filtre'
import {FiltreService } from '../services/filtre.service'

@Component({
  selector: 'app-filtres-gestion',
  templateUrl: './filtres-gestion.component.html',
  styleUrls: ['./filtres-gestion.component.css']
})
export class FiltresGestionComponent implements OnInit {
  filtres: Filtre[];

  constructor(private filtreService : FiltreService ) { }

  ngOnInit() {
    this.getFiltres();
  }

  getFiltres() : void {
    this.filtreService.getFiltres().subscribe(filtres => this.filtres = filtres)
   }

}

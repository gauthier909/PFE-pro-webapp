import { Component, OnInit, OnChanges } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  title = 'ng2auth';
  constructor(
    private swUpdate:SwUpdate
  ){}

    ngOnChanges(){
      
    }

  ngOnInit(){
    this.reloadCache();

  }

  //update l'appli des qu'il y a un changment (pwa)
  reloadCache(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
        if(confirm("New version available! Update ?")){
          window.location.reload();
        }
      })
    }
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import {AuthService} from "../services/auth.service";
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit{
  title = 'ng2auth';
  checkToken = (localStorage.getItem('user-token')==null);
  checkRoleAdmin = (localStorage.getItem('role')=='Administrateur');
  checkRoleProf = (localStorage.getItem('role')=='Professionnel');
  checkRoleParent = (localStorage.getItem('role')=='Parent');
  checkRoleResp = (localStorage.getItem('role')=='Responsable');

  constructor(
    private swUpdate:SwUpdate,
    public authServ:AuthService,
    private socketService: SocketService
  ){}

  ngOnChanges(){

  }
  ngOnInit(){
    this.socketService.socketInit()
    this.reloadCache();

  }
  getUser(){
    if(localStorage.getItem('user')!=null) {
      console.log(JSON.parse(localStorage.getItem('user')).nom)
      return JSON.parse(localStorage.getItem('user')).nom;
    }
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

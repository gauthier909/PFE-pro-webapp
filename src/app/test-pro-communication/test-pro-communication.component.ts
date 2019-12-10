import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client'
import { EnfantService } from '../../services/enfant.service';

@Component({
  selector: 'app-test-pro-communication',
  templateUrl: './test-pro-communication.component.html',
  styleUrls: ['./test-pro-communication.component.css']
})
export class TestProCommunicationComponent implements OnInit {

  private socket: any
  private childNotEmpty: boolean
  private childs: string[]
  private images: Object[]
  private idProfessionnal: string
  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
    this.socket = io.connect("http://localhost:8081")
    this.idProfessionnal = "BOB L EPONGE"
    this.childNotEmpty = false
    this.prepareSocket()
  }

  prepareSocket(){ 
    this.socket.on("getRooms", (data) => {
      this.childs = data
      this.childNotEmpty = true
      console.log("Les rooms disponible dans le backend sont : ", data)
    })
    this.socket.on("message", (data) => {
      console.log("[API] Message recieved:", data)
    })
  }

  onGetChildList(){
    this.socket.emit("getRooms", (data) => {
      console.log("Les rooms disponible dans le backend sont : ", data)
    })
  }

  onSendMessage(){
    this.socket.emit("message", {room: "roomTest", message: "Hello from PRO"})
  }

  onJoinRoom() {
    this.socket.emit('joinRoom', "roomTest")
  }
}

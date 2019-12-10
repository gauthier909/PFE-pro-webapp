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
  private childs: string[]
  private images: Object[]
  private idProfessional: string
  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
    this.socket = io.connect("http://localhost:8081")
    this.idProfessional = "BOB L EPONGE"

    this.prepareSocket()
  }

  prepareSocket(){
    this.socket.on("getRooms", (data)=> {
      console.log("Les rooms disponible dans le backend sont : ", data)
    })
  }

  onGetChildList(){
    this.socket.emit("getRooms", (data) => {
      console.log("Les rooms disponible dans le backend sont : ", data)
    })
  }

  // getRooms(idProfessionnal) {
  //   this.socket.on('getRooms', idProfessionnal, (rooms) => {
  //     console.log('Here are the available rooms', rooms)
  //   })
  // }

  // registerToRoom(roomId: string) {
  //   console.log('Tried to connect to ', roomId)
  //   this.socket.emit('connectToRoom', this.idProfessionnal, roomId)
  //   this.socket.on('roomConnection', (data) => {
  //     console.log('Server responded : ', data)
  //   })
  // }
}

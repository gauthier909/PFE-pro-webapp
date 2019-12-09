import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

const SOCKET_URL = 'http://localhost:8081'

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  socket
  rooms: []
  idProfessionnal
  connect() {
    this.socket = io.connect(SOCKET_URL)

  }

  getRooms(idProfessionnal) {
    this.socket.on('getRooms', idProfessionnal, (rooms) => {
      console.log('Here are the available rooms', rooms)
    })
  }

  registerToRoom(roomId: string) {
    console.log('Tried to connect to ', roomId)
    this.socket.emit('connectToRoom', this.idProfessionnal, roomId)
    this.socket.on('roomConnection', (data) => {
      console.log('Server responded : ', data)
    })
  }

  unregisterRoom(action: string) {

  }

  listenToChild(action: string) {

  }

  sendToChild(action: string) {

  }

  constructor() { }
}

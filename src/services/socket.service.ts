import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

const IO_ROUTE = "http://localhost:8081"
const IO_ROOM = "testRoom"

@Injectable({
    providedIn: 'root'
  })
export class SocketService {
    private socket
    constructor(){}
    
    socketInit(){
        this.socket = io(IO_ROUTE)
        this.socket.emit("joinRoom", IO_ROOM)
        this.socket.on("message", (message) => {
            console.log("[SOCKET] Message recu : ", message)
        })
    }

    sendMessage(message: any){
        this.socket.emit("message", ({room: IO_ROOM, message:message}))    }
}
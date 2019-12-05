import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const HELLO_WORLD_ROUTE = 'http://localhost:8080/';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  private data
  private colors = ['red', 'green', 'blue', 'cyan']
  private colors2 = ['yellow', 'orange', 'purple']
  private i = 0
  private socket
  private messages
  constructor() {
    this.socket = io.connect('http://localhost:8081');
    this.socket.on('chat', (data) => {
      console.log("Sur le channel chat on a recu :", data)
      this.messages += data;
    })
  }

  ngOnInit() {
    // setInterval(()=> {
    //   document.getElementById("apiData").style.borderColor = this.colors[this.i%4]
    //   document.body.style.backgroundColor = this.colors2[this.i%3]
    //   this.i++
    // }, 50)

    setInterval(() => {
      this.data = null
   }, 3000)
  }

  sendMsgAPI(){
    fetch(HELLO_WORLD_ROUTE)
      .then(response => response.clone().json())
      .then(data => {
        console.log("Recieved data from Express API :", data)
        this.data = data
      })
      .catch(err => {
        console.error("Error :", err)
      })
  }

  openChannel(){
    console.log('Testing')
    this.socket.emit('chat', {
      message: "Hello there"
    })
  }
}

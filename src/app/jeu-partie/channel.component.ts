import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client'
import { ChannelService } from '../services/channel/channel.service'

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  providers: [ChannelService]
})
export class ChannelComponent implements OnInit {

  idProfessionnal
  constructor(private channelService: ChannelService) {
    this.idProfessionnal = 'Z43'
    // this.socket.on('chat', (data) => {
    //   console.log("Sur le channel chat on a reçu :", data.message)
    //   this.messages.push(data.message)
    // })
  }

  ngOnInit() {
    this.channelService.connect()
  }

  onGetRooms(){
    this.channelService.getRooms(this.idProfessionnal)
  }

}

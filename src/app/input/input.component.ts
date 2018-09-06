import { Component, OnInit, Input } from '@angular/core';

import * as firebase from 'firebase';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() userAuth;

  constructor(private msgService: ChatService) { }

  ngOnInit() {
  }

  sendMsg(msg) {
    if (msg !== null) {
      const message = {
        msg: msg,
        user: this.userAuth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      this.msgService.addMsg(message);
    }
  }

}

import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { Message } from '../message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('msgContainer') private messagesContainer: ElementRef;

  @Input() userAuth: string;
  messages: Observable<any[]>;
  private msgRef: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
    this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));
  }

  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}

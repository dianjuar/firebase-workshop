import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';

const config = {
  apiKey: 'AIzaSyCBlly3JEs9r643R9qnCdniQtiuc44GehM',
  authDomain: 'fir-wc-8964e.firebaseapp.com',
  databaseURL: 'https://fir-wc-8964e.firebaseio.com',
  projectId: 'fir-wc-8964e',
  storageBucket: 'fir-wc-8964e.appspot.com',
  messagingSenderId: '47564502033'
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

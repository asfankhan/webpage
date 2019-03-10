import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';

const config = {
  apiKey: "AIzaSyD3qZCR8rCF8ii8kc0uA8Gi6OWqztieyII",
  authDomain: "chat-app-4ac58.firebaseapp.com",
  databaseURL: "https://chat-app-4ac58.firebaseio.com",
  projectId: "chat-app-4ac58",
  storageBucket: "chat-app-4ac58.appspot.com",
  messagingSenderId: "68492580432"
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule, AngularFireModule.initializeApp(config),AngularFirestoreModule,AngularFireStorageModule, AngularFireAuthModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }

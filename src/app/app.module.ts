import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { ModalproductComponent } from './modalproduct/modalproduct.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalproductComponent,
    LoginComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBS8gIOtlo0HgIdtvT9dFF4s_jpbkJ8ino",
      authDomain: "trabmotanha.firebaseapp.com",
      databaseURL: "https://trabmotanha.firebaseio.com",
      projectId: "trabmotanha",
      storageBucket: "trabmotanha.appspot.com",
      messagingSenderId: "611786546158",
      appId: "1:611786546158:web:bae40cb950503cec45ccff"
    }, 'shazam'),
    AngularFireDatabaseModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    ModalproductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

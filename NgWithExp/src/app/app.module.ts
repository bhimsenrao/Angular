import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { MongoAdd }      from './app.MongoAdd';
import { AppDelRec }       from './app.MongoDel';
 @NgModule({
   declarations: [
      AppComponent,MongoAdd,
      AppDelRec
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MongoAdd }      from './app.MongoAdd'
import { AppDelRec }       from './app.MongoDel';
import { FormsModule }   from '@angular/forms';
import { CustomMaterialModule }      from './core/material.module';
 @NgModule({
   declarations: [
      AppComponent,MongoAdd,AppDelRec
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
      CustomMaterialModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
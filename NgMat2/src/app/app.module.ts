import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CustomMaterialModule }      from './core/material.module';
 @NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      FormsModule, ReactiveFormsModule,
      CustomMaterialModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
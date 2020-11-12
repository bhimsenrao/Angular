import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } 
from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
 
imports: [
BrowserModule, FormsModule],
  
providers: [],
  
bootstrap: [AppComponent]
})
export class AppModule { }

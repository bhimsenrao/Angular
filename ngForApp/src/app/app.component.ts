import { Component } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent {
   appTitle: string = 'ApplicationList';
 appList: any[] = [
     {
      "ID": "101",
      "Name" :"Bhimsen"
   },
   {
      "ID": "102",
      "Name" :"Leela"
   },
   {
      "ID": "103",
      "Name" :"Sanjay"
   } ];
}
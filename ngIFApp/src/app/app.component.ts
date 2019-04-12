import { Component } from '@angular/core';

@Component({
 
selector: 'app-root',
 
templateUrl: './app.component.html',
  
styleUrls: ['./app.component.css']
})

export class AppComponent {
  
   appTitle: string = 'Bhimsen';
   appStatus: boolean = false;
   codes=[10,20,30,40];
    color='blue';
  // names=['raju','kiran','manoj'];
}

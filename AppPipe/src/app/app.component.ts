import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bhimsen';
 todaydate = new Date();
 jsonval = {name:'Sanjay', age:'25', 
 address:{first_addr:'Mumbai', office_addr:'Karnataka'}};
 months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
}

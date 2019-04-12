import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'Angular Project!';
   todaydate;
   componentproperty;
   constructor(private myservice: MyserviceService) { }
   ngOnInit() {
      this.todaydate = this.myservice.showTodayDate();
   }
   onClickSubmit(data) {
      alert("Entered Email id : " + data.emailid);
   }
}
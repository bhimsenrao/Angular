import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})
export class AppComponent  {
username:string;
password:string;
  login():void{
    if( this.username=='admin' && this.password=='admin'){
      alert('valid user')
    }
    else{
      alert('invalid user')
    }
  }
}

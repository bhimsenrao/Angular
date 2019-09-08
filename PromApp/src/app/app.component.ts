import { Component, OnInit } from '@angular/core';
import SampleJson from '../assets/data/db.json';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'DBApp';
  data: string[];
  id = '';
  info="";
  constructor(private http:HttpClient) {
    console.log('Reading local json files');
    console.log(SampleJson);
   }   
   ngOnInit() {
       this.http.get('./assets/data/db.json').toPromise().then(
         data=>{ this.data =data as string[];
         console.log(data);},
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
        );
     }
   }

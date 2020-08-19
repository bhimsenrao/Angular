import { Component, OnInit } from '@angular/core';
import SampleJson from '../assets/data/db.json';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-root',
 /* template: `{{title}}
  <ul *ngFor='let d of data'>
  <li>{{d.id}} , {{d.name}}</li>
  </ul>
  `,*/
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'DBApp';
  data: string[];
  id=103;
  info="";
  /*
  data= [
    {id: 0, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"},   
  ];
  */
  constructor(private http:HttpClient) {
    console.log('Reading local json files');
    console.log(SampleJson);

   }   
   ngOnInit() {
       this.http.get('./assets/data/db.json').subscribe(data=> { this.data =data as string[]},
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
        );
     }
     
   
   }


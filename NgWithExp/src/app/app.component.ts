import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'MongoDB';
  data: string[];
  constructor(private http: HttpClient) {
    console.log('Reading local json files');
   }
   ngOnInit() {
      console.log('waiting for data');
     this.http.get('http://localhost:8900/show').subscribe((data) =>{
       this.data=data as string[];
     console.log(this.data)});}
   }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'delrec',
  templateUrl:'./app.MongoDel.html',
  styleUrls: ['./app.component.css'],
})
export class AppDelRec implements OnInit{
  title = 'DBApp';
  data :string;
  address:string='address';
  constructor(private http:HttpClient) {
    console.log('Reading local json files');
   // http.jsonp('http://localhost:8900/show','').subscribe((data)=>console.log(data));
   }   
   ngOnInit() {
      
     }
     delRecord():void{
        console.log('waiting for data');
        this.http.get('http://localhost:8900/delRec?address='+this.address).subscribe((data) =>{
          this.data=data as string;
        console.log(this.data)});

     }
   }
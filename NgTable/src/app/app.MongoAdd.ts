import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Component(  
    {
        selector: 'addrec',
        templateUrl:'./app.MongoAdd.html',
        styleUrls: ['./app.component.css'],
      
    })
    export class MongoAdd implements OnInit{
        data: string;
        message:string="input field values";
        name:string="Sunil";
        address:string="Hyd";
        constructor(private http:HttpClient) {}
        ngOnInit() {
           this.message="ready to add";
           }
           addRecord():void{
            console.log('waiting for data');
            this.message="Record added";
            this.http.get('http://localhost:8900/addRec?pname='+this.name+'&addr='+this.address)
            .subscribe((data) =>{
                console.log(data);
            this.data=data as string;
               this.message="Done";
                console.log(this.message);
                
           console.log(this.data)});
           }
    }


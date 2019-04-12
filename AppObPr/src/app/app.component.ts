import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private results = [];
  constructor(public http: HttpClient) { }
   show(term){
     console.log(term);
   }
   search(term) {
    console.log(term);
    this.http.get(`https://swapi.co/api/people/?search=${term}`).toPromise()
    .then((data: any) => {
      /* tslint:disable:no-console */
      console.time('request-length');
      console.log(data);
      console.timeEnd('request-length');
      this.results = data.results;
    });
  }
}

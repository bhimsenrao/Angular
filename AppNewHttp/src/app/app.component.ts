import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './json-service';
@Component({
   selector: 'app-root',
   templateUrl: './app.test.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public jsonData: any;

  constructor(
    private jsonService: JsonService) {
  }

  public ngOnInit(): void {
    this.jsonService.getData()
      .subscribe((data: any): void => {
        this.jsonData = data;
      });
  }
}

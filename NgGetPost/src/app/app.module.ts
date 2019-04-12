import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { BookService } from './book.service';
import { BookData } from './book-data';

@NgModule({
  imports: [     
        BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(BookData)
  ],
  declarations: [
        AppComponent,
		ObservableComponent,
		PromiseComponent
  ],
  providers: [
        BookService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }

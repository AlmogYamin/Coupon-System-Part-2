import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyformComponent } from './components/myform/myform.component';


@NgModule({
  declarations: [
    AppComponent,
    MyformComponent
  ],
  //modules which are from angular core
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

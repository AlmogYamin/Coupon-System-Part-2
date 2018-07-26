import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { HomeComponent } from './components/home/home.component';
import { GetAllCompaniesComponent } from './components/get-all-companies/get-all-companies.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCompanyComponent,
    HomeComponent,
    GetAllCompaniesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {
        path : 'home',
        component :  HomeComponent
      },
      {
        path : 'create',
        component :  CreateCompanyComponent
      },
      {
        path : 'get',
        component :  GetAllCompaniesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

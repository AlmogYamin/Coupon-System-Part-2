import { Component, OnInit } from '@angular/core';

import {Company} from '../common/Company';

import {Http} from '@angular/http';

import swal from 'sweetalert2';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company : Company = new Company();

  // dependancy injection for http object ->will become
  // a member of this class
  constructor(private _http : Http) { }

  ngOnInit() {
  }

  public updateCompany()
  {
    this._http.put ('http://localhost:8080/adminApi/updateCompany'
    ,this.company).subscribe(function(response)
   {
     console.log(response);
   });

   swal({
    position: 'center',
    type: 'success',
    title: 'Success!',
    text:'Your Company Has Been Updated',
    showConfirmButton: false,
    timer: 1800
    })
}
}
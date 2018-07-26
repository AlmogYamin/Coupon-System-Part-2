import { Component, OnInit } from '@angular/core';
import { Person } from '../../Person';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  public p : Person;

  constructor() { 
    this.p = new Person(1,"almog");
  }

  ngOnInit() {
  }

}

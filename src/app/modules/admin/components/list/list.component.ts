import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',

})
export class ListComponent implements OnInit {
  public title;
  public numbers = new Array(10);

  constructor() {
    this.title = 'Lista De Roles';
  }

  ngOnInit() {
  }

}

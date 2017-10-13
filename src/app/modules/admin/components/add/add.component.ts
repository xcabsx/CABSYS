import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public title;

  constructor() {
    this.title = 'agregar';
  }

  ngOnInit() {
  }

}

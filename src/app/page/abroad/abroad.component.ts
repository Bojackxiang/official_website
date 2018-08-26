import { Component, OnInit } from '@angular/core';

import { Setting } from '../../setting/setting';
@Component({
  selector: 'abroad',
  templateUrl: './abroad.component.html',
})
export class AbroadComponent implements OnInit {
  setting = Setting;
  constructor(
  ) {
  }

  ngOnInit(): void{
  }
}

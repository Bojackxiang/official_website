import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Setting } from '../../setting/setting';

@Component({
  selector: 'header-section',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  setting = Setting;
  menuStatus: boolean = false;
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {
  
  }

  switchMenu(): void {
    this.menuStatus = !this.menuStatus;
  }

  onClickMenuItem(): void {
    this.menuStatus = false;
  }
}
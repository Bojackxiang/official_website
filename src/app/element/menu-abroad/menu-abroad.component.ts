import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-abroad',
  templateUrl: './menu-abroad.component.html',
  styleUrls: ['./menu-abroad.component.css']
})
export class MenuAbroadComponent implements OnInit{
  constructor(
    private router: Router,
  ) {
  }
  ngOnInit(): void{
  }
}
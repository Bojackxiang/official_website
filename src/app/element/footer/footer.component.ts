import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Setting} from '../../setting/setting';

@Component({
  selector: 'footer-section',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  version = Setting.VERSION;

  constructor(private router: Router) {

  }

  ngOnInit(): void {

  }
}
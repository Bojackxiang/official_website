import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  windowHeight: number;
  windowWidth: number;
  confirmWidth: number;
  resize$$;
  constructor(private router: Router) {

  }

  ngOnInit(): void{
    this.router.events.subscribe(e => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.resize();
    this.resize$$ = Observable.fromEvent(window, 'resize').throttleTime(100).subscribe(e => this.resize());
  }

  resize(): void{
    this.windowHeight = window.document.documentElement.clientHeight;
    this.windowWidth = window.document.documentElement.clientWidth;
    this.confirmWidth = document.getElementById('width').clientWidth;
    let fontSize: number = this.confirmWidth/24;
    document.querySelector('html').style.fontSize = `${this.confirmWidth/24}px`;
  }
}

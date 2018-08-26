import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'abroad-single',
  styleUrls: ['./abroad-single.component.css'],
  templateUrl: './abroad-single.component.html',
})
export class AbroadSingleComponent implements OnInit{
  articleCode: string;
  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void{
    this.route.params.forEach((params: Params) => {
      this.articleCode = params['articleCode'];
    });
  }
}

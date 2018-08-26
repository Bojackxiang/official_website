import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ArticleData } from '../../data/article.data';

import { RestResponse } from '../../model/rest-response';
import { Article } from '../../model/article'; 

@Component({
  selector: 'articles-latest',
  templateUrl: './articles-latest.component.html',
  styleUrls: ['./articles-latest.component.css']
})
export class ArticlesLatestComponent implements OnInit{
  articles: Article[];
  loading: boolean = true;
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private articleData: ArticleData,
  ) {
  }
  ngOnInit(): void{
    this.articleData.getArticles()
        .subscribe( response => this.handleGetArticles(response),
                    err => {});
  }
  handleGetArticles(response: RestResponse): void{
    switch (response.code) {
      case 2000:
        this.articles = response.data;
        for (let i = 0; i < this.articles.length; i++) {
          this.articles[i].publishedDate = new Date(this.articles[i].publishedAt);
        }
        this.loading = false;
        break;
      default:
        break;
    }
  }
}
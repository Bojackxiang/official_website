import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ResponseService } from '../../service/response.service';

import { ArticleData } from '../../data/article.data';

import { RestResponse } from '../../model/rest-response';
import { Article } from '../../model/article'; 
import { Link } from '../../model/link';

@Component({
  selector: 'article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
  article: Article;
  loading: boolean = true;

  @Input('articleCode') articleCode: string;

  breadcrumb: Link[] = [];

  constructor(private router: Router,
              private sanitizer: DomSanitizer,
              private articleData: ArticleData,
              private responseService: ResponseService) {

  }

  ngOnInit() {
    this.articleData.getArticle(this.articleCode)
        .subscribe( response => this.handleGetArticle(response),
                    err => {});
  }

  private handleGetArticle(response: RestResponse): void {
    if (!response || !response.success) {
      return this.responseService.handleError(response);
    }

    this.article = response && response.data;
    this.article.contentHtml = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
    this.loading = false;

    // add breadcrumb
    const link = new Link();
    link.rel = this.article.title;
    link.href = '';
    this.breadcrumb.push(link);
  }
}
import { Injectable } from "@angular/core";
import { Headers, Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import * as sha1 from 'js-sha1';

import { ResponseService } from "../service/response.service";

import { RestResponse } from "../model/rest-response";

import { Setting } from "../setting/setting";

@Injectable()
export class ArticleData {
  private articleUrl = Setting.api_base + Setting.articleListCate; 
  private headers = new Headers({ accept: "application/json" });

  private url = `${Setting.API_BASE}/articles`;

  constructor(private http: Http, private responseService: ResponseService) {}

  API_BASE = Setting.api_base;
  
  // get a single article 
  getArticle(articleCode: string): Observable<RestResponse> {
    return this.http.get(`${this.url}/${articleCode}`, new RequestOptions({headers: this.headers}))
      .map(response => this.responseService.result(response))
      .catch(err => this.responseService.error(err));
  }

  // get specific number of articles
  getArticles(): Observable<RestResponse> {
    // build page and size number for test purpose
    const page = 1;
    const size = 10;
    const newest_news_article = this.articleUrl+'page='+page+'&size='+size;
    
    return this.http
      .get(newest_news_article)
      .map(response => this.responseService.result(response))
      .catch(err => this.responseService.error(err));
  }

  getArticlesByCategory(catName: string, page: number, size: number): Observable<RestResponse> {
    const catNameSalt = sha1(catName);
    return this.http
      .get(`${this.url}/category/${catNameSalt}?page=${page}&size=${size}`)
      .map(response => this.responseService.result(response))
      .catch(err => this.responseService.error(err));
  }
}

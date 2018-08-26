import {Component, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';

import {ResponseService} from '../../service/response.service';

import {NewsService} from './news.service';
import {ArticleData} from '../../data/article.data';
import {SliderData} from '../../data/slider.data';

import {Article} from '../../model/article';
import {RestResponse} from '../../model/rest-response';
import {Slider} from '../../model/slider';

import {Setting} from '../../setting/setting';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})

export class IndexComponent implements OnInit {
  transButtonClick = '';
  transMenu = Setting.TRANS_MENU;
  imageList = Setting.IMAGE_LIST;
  transImageSrc = Setting.TRANS_IMAGE_SRC;
  transTextContent1 = Setting.TRANS_TEXT_CONTENT1;
  transTextContent2 = Setting.TRANS_TEXT_CONTENT2;

  newsCaseList = this.newsEvents.cases;
  studyPlan = Setting.STUDY_PALN;
  majors = Setting.MAJORS;
  teachers = Setting.TEACHERS;
  transButtonMobile = Setting.TRANS_BUTTON_MOBILE;
  
  newsEventList: Article[] = [];
  private page = 1;
  private size = 10;

  slider: Slider;
  sliderConfig = {slidesToShow: 1, slidesToScroll: 1};

  constructor(private newsEvents: NewsService,
              private articleData: ArticleData,
              private sliderData: SliderData,
              private responseService: ResponseService) {

  }

  ngOnInit() {
    this.sliderData.getSlider(Setting.SLIDER_ID_HOME).subscribe(
      response => {
        console.log(response);
        if (response && response.success) {
          this.slider = response && response.data;
          this.getArticles('教育最新资讯');
        } else {
          this.responseService.handleResponse(response);
        }
      },
      err => this.responseService.handleError(err)
    );
  }

  private getArticles(category: string): void {
    this.articleData.getArticlesByCategory(category, this.page, this.size).subscribe(
      response => this.handleGetArticlesResponse(response),
      err => this.responseService.handleError(err)
    );
  }

  private handleGetArticlesResponse(response: RestResponse): void {
    if (!response || !response.success) {
      return this.responseService.handleError(response);
    }

    this.newsEventList = response && response.data;
    console.log(this.newsEventList);
  }

  /* write for effects
   */
  transButton(name) {
    this.transButtonClick = name;
    this.transImageSrc = this.imageList[this.transMenu.indexOf(name) + 1];
  }

  showToggle(element) {
    $(element).slideDown();
  }

  hideToggle(element) {
    $(element).slideUp();
  }

  /* this is for news switch
  */
  switchNews(element) {
    this.newsEvents.status = element.innerText;

    if (this.newsEvents.status === '最新资讯') {
      this.newsCaseList = this.newsEvents.newest;
    }

    if (this.newsEvents.status === '成功案例') {
      this.newsCaseList = this.newsEvents.cases;
    }

    if (this.newsEvents.status === '精彩回顾') {
      this.newsCaseList = this.newsEvents.review;
    }
  };



}

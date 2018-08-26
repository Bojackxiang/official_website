import './plugin/rxjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SlickModule } from 'ngx-slick';

import { routing } from './route/app.routing';

import { AppComponent } from './app.component';

import { IndexComponent } from './page/index/index.component';
import { AbroadComponent } from './page/abroad/abroad.component';
import { AbroadSingleComponent } from './page/abroad-single/abroad-single.component';
import { CategoryArticlesComponent } from './page/category-articles/category-articles.component';
import { ArticleSingleComponent } from './page/article-single/article-single.component';

import { LoadingComponent } from './element/loading/loading.component';
import { HeaderComponent } from './element/header/header.component';
import { FooterComponent } from './element/footer/footer.component';
import { MenuComponent } from './element/menu/menu.component';
import { MenuAbroadComponent } from './element/menu-abroad/menu-abroad.component';
import { SliderComponent } from './element/slider/slider.component';
import { ArticleContentComponent } from './element/article-content/article-content.component';
import { ArticlesLatestComponent } from './element/articles-latest/articles-latest.component';
import { ArticleListComponent } from './element/article-list/article-list.component';

import { ArticleData } from './data/article.data';
import { SliderData } from './data/slider.data';

import { ResponseService } from './service/response.service';
import { NewsService } from '../app/page/index/news.service';

@NgModule({
  declarations: [
    AppComponent,

    // pages
    IndexComponent,
    AbroadComponent,
    AbroadSingleComponent,
    CategoryArticlesComponent,
    ArticleSingleComponent,

    // element components
    LoadingComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuAbroadComponent,
    SliderComponent,
    ArticleContentComponent,
    ArticlesLatestComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlickModule.forRoot(),
    routing
  ],
  providers: [
    ArticleData,
    SliderData,
    ResponseService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

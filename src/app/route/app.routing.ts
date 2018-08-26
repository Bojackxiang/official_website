import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from '../page/index/index.component';
import { AbroadComponent } from '../page/abroad/abroad.component';
import { AbroadSingleComponent } from '../page/abroad-single/abroad-single.component';
import { CategoryArticlesComponent } from '../page/category-articles/category-articles.component';
import { ArticleSingleComponent } from '../page/article-single/article-single.component';

const appRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: '澳洲留学规划',
    component: AbroadComponent
  },
  {
    path: 'articles/category/:category',
    component: CategoryArticlesComponent
  },
  {
    path: ':article/:code',
    component: ArticleSingleComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

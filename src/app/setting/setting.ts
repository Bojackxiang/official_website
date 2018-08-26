import {environment} from '../../environments/environment';

export class Setting {
  static HOST: string = environment.production ? 'edu.austop.com.au' : 'staging-edu.austop.com.au';
  static API_BASE: string = environment.production ? 'https://api.austop.com.au' : 'https://staging.cms-api.austop.com.au';
  static VERSION_NUMBER: string = '0.0.5';
  static VERSION: string = environment.production ? Setting.VERSION_NUMBER : Setting.VERSION_NUMBER + '-preview';

  static SLIDER_ID_HOME = environment.production ? '' : '5af2db5f51b5e900191189cb';

  static API_SLIDER: string = 'sliders';
  static API_ARTICLE: string = 'articles';

  static ROUTE_ABROAD: string = '澳洲留学规划';

  static ARTICLE_ABROAD: string = '1';
  static ARTICLE_ABROAD_1: string = '2';

  static STUDY_PALN = [
    ['初高中留学0', ['迅速提高英语水平0-1', '迅速提高英语水平0-2', '迅速提高英语水平0-3', '迅速提高英语水平0-4'], '/assets/images/3.png'],
    ['初高中留学1', ['迅速提高英语水平1-1', '迅速提高英语水平1-2', '迅速提高英语水平1-3', '迅速提高英语水平1-4'], '/assets/images/3.png'],
    ['初高中留学2', ['迅速提高英语水平2-1', '迅速提高英语水平2-2', '迅速提高英语水平2-4', '迅速提高英语水平2-4'], '/assets/images/3.png'],
    ['初高中留学3', ['迅速提高英语水平3-1', '迅速提高英语水平3-2', '迅速提高英语水平3-4', '迅速提高英语水平3-4'], '/assets/images/3.png'],
  ];

  static IMAGE_LIST = ['/assets/images/trans1.png',
    '/assets/images/trans2.jpg',
    '/assets/images/trans3.png',
    '/assets/images/trans4.jpg',
    '/assets/images/trans5.jpg'];

  static TRANS_MENU = ['中学介绍1', '中学介绍2', '中学介绍3', '中学介绍4', '中学介绍5'];

  static TRANS_IMAGE_SRC = '/assets/images/trans1.png';

  static TRANS_TEXT_CONTENT1 = 'PATHWAY桥梁课程是针对有高中毕业证 (YEAR12)或高二(YEAR11)的国际留学生 想通过快速又稳定的途径进入理想大学就 读的课程。';

  static TRANS_TEXT_CONTENT2 = '高中毕业生即使不能直接申请澳洲大学本 科，也可以通过桥梁课程再次获得进入澳 洲八大等澳洲名校的机会。可分为预科课 程和本科快捷课程。';

  static MAJORS = [
    ['会计', '澳洲留学界老大学位紧缺！pathway课程快速直达名校', '/assets/images/Icon-01.jpg'],
    ['会计', '澳洲留学界老大学位紧缺！pathway课程快速直达名校', '/assets/images/Icon-02.jpg'],
    ['会计', '澳洲留学界老大学位紧缺！pathway课程快速直达名校', '/assets/images/Icon-03.jpg'],
    ['会计', '澳洲留学界老大学位紧缺！pathway课程快速直达名校', '/assets/images/Icon-04.jpg'],
    ['会计', '澳洲留学界老大学位紧缺！pathway课程快速直达名校', '/assets/images/Icon-05.jpg']];

  static TEACHERS = [
    ['Louis Chen', '環澳教育經理', '0400 000 000', 'austop@gmail.com'],
    ['Louis Chen', '環澳教育經理', '0400 000 000', 'austop@gmail.com'],
    ['Louis Chen', '環澳教育經理', '0400 000 000', 'austop@gmail.com'],
    ['Louis Chen', '環澳教育經理', '0400 000 000', 'austop@gmail.com']
  ];

  static TRANS_BUTTON_MOBILE = [
    ['中学介绍1',
      'PATHWAY桥梁课程是针对有高中毕业证 (YEAR12)或高二(YEAR11)的国际留学生想通过 快速又稳定的途径进入理想大学就读的课程. 高中毕业生即使不能直接申请澳洲大学本科，也 可以通过桥梁课程再次获得进入澳洲八大等澳洲 名校的机会。可分为预科课程和本科快捷课程。',
      'http://www.google.com'],
    ['中学介绍2',
      'PATHWAY桥梁课程是针对有高中毕业证 (YEAR12)或高二(YEAR11)的国际留学生想通过 快速又稳定的途径进入理想大学就读的课程. 高中毕业生即使不能直接申请澳洲大学本科，也 可以通过桥梁课程再次获得进入澳洲八大等澳洲 名校的机会。可分为预科课程和本科快捷课程。',
      'http://www.google.com'],
    ['中学介绍3',
      'PATHWAY桥梁课程是针对有高中毕业证 (YEAR12)或高二(YEAR11)的国际留学生想通过 快速又稳定的途径进入理想大学就读的课程. 高中毕业生即使不能直接申请澳洲大学本科，也 可以通过桥梁课程再次获得进入澳洲八大等澳洲 名校的机会。可分为预科课程和本科快捷课程。',
      'http://www.google.com'],
    ['中学介绍4',
      'PATHWAY桥梁课程是针对有高中毕业证 (YEAR12)或高二(YEAR11)的国际留学生想通过 快速又稳定的途径进入理想大学就读的课程. 高中毕业生即使不能直接申请澳洲大学本科，也 可以通过桥梁课程再次获得进入澳洲八大等澳洲 名校的机会。可分为预科课程和本科快捷课程。',
      'http://www.google.com'],
    ['中学介绍5',
      'PATHWAY桥梁课程是针对有高中毕业证 (YEAR12)或高二(YEAR11)的国际留学生想通过 快速又稳定的途径进入理想大学就读的课程. 高中毕业生即使不能直接申请澳洲大学本科，也 可以通过桥梁课程再次获得进入澳洲八大等澳洲 名校的机会。可分为预科课程和本科快捷课程。',
      'http://www.google.com']
  ];

  static ARTICLES_URL = 'https://api.austop.com.au/articles/category/34c808d0a63f277e04fb23a5f76cc83d0a3e024b?page=1&size=10&siteNameSalt=19978517863adae9009387bd8a9e92e08fb3c2ed';

  // API INFO
  // static api_base = "https://staging.cms-api.austop.com.au/";
  static api_base = 'localhost:8000/'
  static articleListCate = "articles/?";


}

import { Category } from './category';

export class Article {
  id: number;
  code: string;
  title: string;
  keywords: string;
  excerpt: string;
  featureImgUrl: string;
  enabled: boolean;
  content: string;
  contentHtml: any;
  siteId: number;
  siteCode: string;
  siteName: string;
  sortWeight: number;
  categories = [];
}
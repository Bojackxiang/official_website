import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ArticleData } from '../../data/article.data';

import { Article } from '../../model/article';
import { Link } from '../../model/link';

@Component({
    selector: 'category-articles',
    templateUrl: './category-articles.component.html',
    styleUrls: ['./category-articles.component.css']
})

export class CategoryArticlesComponent implements OnInit {

    category: string;
    catArticles: Article[];

    page = 1;
    size = 10;
    loading = false;

    constructor(private route: ActivatedRoute,
                private articleData: ArticleData) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.category = params['category'];
            this.loading = true;
            this.getCatArticles();
        });
    }

    private getCatArticles(): void {
        this.articleData.getArticlesByCategory(this.category, this.page, this.size).subscribe(
            response => this.handleGetCatArticlesResponse(response),
            err => this.handleError(err)
        );
    }

    private handleGetCatArticlesResponse(response): void {
        if (response && response.success) {
            console.log(CategoryArticlesComponent.name, 'category articles loaded', response);
            this.catArticles = response && response.data;
            this.loading = false;
        } else {
            this.handleError(response);
        }
    }

    onPrevClicked(): void {
        this.loading = true;
        --this.page;
        this.articleData.getArticlesByCategory(this.category, this.page, this.size).subscribe(
            response => this.handleGetCatArticlesResponse(response),
            err => this.handleError(err)
        );
    }

    onNextClicked(): void {
        this.loading = true;
        ++this.page;
        this.articleData.getArticlesByCategory(this.category, this.page, this.size).subscribe(
            response => this.handleGetCatArticlesResponse(response),
            err => this.handleError(err)
        );
    }

    private handleError(err: any): void {
        console.error(CategoryArticlesComponent.name, 'error', JSON.stringify(err));
    }
}
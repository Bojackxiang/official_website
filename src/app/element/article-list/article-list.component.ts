import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../../model/article';

@Component({
    selector: 'article-list',
    templateUrl: './article-list.component.html',
    styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {

    @Input()
    category: string;

    @Input()
    articles: Article[];

    @Input()
    page: number;

    @Input()
    size: number;

    @Output()
    isPrevClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    isNextClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private router: Router) {

    }

    ngOnInit() {
        console.log('ArticleListComponent', this.articles);
    }

    onClickArticle(article: Article): void {
        this.router.navigate([`/${article.title}/${article.code}`]);
    }

    onClickPrevPage(): void {
        this.isPrevClicked.emit(true);
    }

    onClickNextPage(): void {
        this.isNextClicked.emit(true);
    }
}
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-artile-single',
    templateUrl: './article-single.component.html',
    styleUrls: ['./article-single.component.css']
})

export class ArticleSingleComponent implements OnInit {
    articleTitle = '';
    articleCode = '';

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.articleTitle = params['article'];
            this.articleCode = params['code'];
        });
    }
}
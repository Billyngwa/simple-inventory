import { Component, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
Article
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @HostBinding('attr.class') cssClass = 'row';
 @Input() article!: Article;

  constructor() {}
  upVote() {
    this.article.upVote();
  }

  downVote() {
    this.article.downVote();
  }

}

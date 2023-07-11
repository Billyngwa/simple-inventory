import { Component } from '@angular/core';
import { Article } from '../article/article.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  articles: Array<Article>;
  form!: HTMLFormElement;

   
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),

    ]
  }
  addArticle(e: any, title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new Article(title.value, link.value, 0));
    
    title.value = '';
    link.value = '';
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
    
    }
}

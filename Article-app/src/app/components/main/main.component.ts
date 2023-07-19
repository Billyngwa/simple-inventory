import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  clicked!: boolean
  tosignUp(e: any) {
    this.clicked = e
    this.route.navigate(['/sign-up'])
  }
  constructor(private route: Router) { }
  // sortedArticles(): Article[] {
  //   return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);

  //   }
}

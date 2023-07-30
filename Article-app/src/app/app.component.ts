import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    window.addEventListener('online', () => console.log('Became online'));
  }
   
  // window.addEventListener('online', () => console.log('Became online'));
}

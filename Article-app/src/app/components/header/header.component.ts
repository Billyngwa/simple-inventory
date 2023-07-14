import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navbarList:Array<string> = [
    'About','Services','Products','Help'
  ]
  clicked:boolean = false
  @Output() tosignup = new EventEmitter<boolean>();
  takeme(e:any){
    this.clicked = !this.clicked;
    this.tosignup.emit(this.clicked);
  }
}

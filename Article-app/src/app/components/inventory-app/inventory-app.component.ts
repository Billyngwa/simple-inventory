import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.scss']
})
export class InventoryAppComponent {
  constructor(public namefunc:UserService){}
  @Input() expenseDisplay: any;
//  nameinitial = this.namefunc.nameinitial()
}

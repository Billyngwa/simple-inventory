import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.scss']
})
export class InventoryAppComponent {
  @Input() expenseDisplay: any;
  nameinitial(name: string) {
    let slitter = name.split(' ');
    let slit = [];
    for (let i = 0; i < slitter.length; i++) {
      if (slitter[i] !== '') {
        slit.push(slitter[i]);
      } else {
        continue
      }
    }
    let char = slit[1] ? slit[1].charAt(0) : '';
    return (slit[0].charAt(0)).toUpperCase();

  }
}

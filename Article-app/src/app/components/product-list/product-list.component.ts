import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  showForm = false;
  expenseCategory:Array<string> = ['Dresses','Academics','Health','Transport','Feeding'];
  userExpense:IExpense = {
    amountInAccount: 0,
    totalSpent: 0,
    category: '',
    author: {}
  }
  constructor(private localstore:LocalstoreService, private userservice:UserService){}
  allExpenses:object[]=[];
  showform(e:any){
    this.showForm = !this.showForm;
  }
  getFromArray():Array<object>{
    return this.allExpenses;
  }
  addExpense(e:any,expense:IExpense){
    expense.author=this.localstore.get('User').data ;
    expense.date = this.userservice.getDate()['date' as keyof object];
    expense.time =this.userservice.getDate()['time' as keyof object];
    this.allExpenses.push(expense);
    this.showForm=!this.showForm;
    return this.allExpenses;
  }
  // wipeForm(e:any){
  //   this.showForm=!this.showForm
  // }
}

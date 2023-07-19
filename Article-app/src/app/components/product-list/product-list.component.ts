import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  login!:boolean
  Image!:string
  userName!:string 
  email!:string 
  showForm = false;
  expenseCategory:Array<string> = ['Dresses','Academics','Health','Transport','Feeding'];
  userExpense:IExpense = {
    amountInAccount: 0,
    totalSpent: 0,
    category: '',
    author: {}
  }
  ngOnInit(): any {
    if(this.localstore.get('User').status == true)
    {
      this.login = this.localstore.get("User").data['loginStatus']
      // this.Image = this.userservice.nameinitial/
      this.userName = this.localstore.get("User").data['Name']
      this.email = this.localstore.get("User").data['email'];
    }
  }
  constructor(private localstore:LocalstoreService, public userservice:UserService,private authservice:AuthenticationService){}
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
  toggleClass(e:any){
  }
  signOut(){
    this.authservice.signOut();
  }
}

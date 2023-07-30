import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { UserService } from 'src/app/services/user.service';
import { Firestore, addDoc, setDoc, collection, deleteDoc, doc, getDocs,onSnapshot, getDoc} from '@angular/fire/firestore';
import { Observable, merge } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  constructor(
    private localstore:LocalstoreService, 
    public userservice:UserService,
    private authservice:AuthenticationService, 
    private fire:Firestore
    ){}
  

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
    getDocs(this.subcol)
    .then((respond) => {
      this.allExpenses = 
       [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    }) 
    if(this.localstore.get('User').status == true)
    {
      this.login = this.localstore.get("User").data['loginStatus']
      this.userName = this.localstore.get("User").data['Name']
      this.email = this.localstore.get("User").data['email'];
    }
    window.addEventListener('online', () => window.location.reload()
    );
   
  }
  allExpenses:Array<object>=[];
  dbRef = collection(this.fire,"Expense");
  docref = doc(this.dbRef,this.localstore.get("User").data['email'])
  subcol = collection(this.docref,'My Expenses')
  docsSnap:any;
  showform(e:any){
    this.showForm = !this.showForm;
  }
  
     addExpense(e:any,expense:IExpense){
    expense.author=this.localstore.get('User').data ;
    expense.date = this.userservice.getDate()['date' as keyof object];
    expense.time =this.userservice.getDate()['time' as keyof object];
    addDoc(this.subcol,expense);
    getDocs(this.subcol)
    .then((respond) => {
      this.allExpenses = 
       [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    }) 

    this.showForm=!this.showForm;
    return this.allExpenses
  }
  toggleClass(e:any){
  }
  signOut(){
    this.authservice.signOut();
  }
}

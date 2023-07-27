import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Auth } from '@angular/fire/auth/firebase';
import { GoogleAuthProvider, UserCredential, getRedirectResult } from '@firebase/auth';
import { IExpense } from 'src/app/interfaces/expense.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocalstoreService } from 'src/app/services/localstore.service';
import { UserService } from 'src/app/services/user.service';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs,onSnapshot} from '@angular/fire/firestore';


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
    if(this.localstore.get('User').status == true)
    {
      this.login = this.localstore.get("User").data['loginStatus']
      this.userName = this.localstore.get("User").data['Name']
      this.email = this.localstore.get("User").data['email'];
    }
    getDocs(this.dbRef)
    .then((respond) => {
      // alert('Data Gotten')
      this.allExpenses = 
       [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
       console.log(this.allExpenses);
    }) 
  }
  allExpenses:object[]=[];
  dbRef = collection(this.fire,"Expense");
  docsSnap:any;
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
    addDoc(this.dbRef,expense);
    getDocs(this.dbRef)
    .then((respond) => {
      // alert('Data Gotten')
      this.allExpenses = 
       [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
       console.log(this.allExpenses);
    }) 
    this.showForm=!this.showForm;
   
    
    return this.allExpenses;
  }
  toggleClass(e:any){
  }
  signOut(){
    this.authservice.signOut();
  }
}

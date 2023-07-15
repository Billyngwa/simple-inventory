import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  constructor(private users: UserService,private fire:Firestore) { }

  User: IUser= {
    Username: '',
    email: '',
    password: '',
    id: 0
  }

  Submit(e:any,user:IUser){
    this.users.signUp(user);
    const dbRef = collection(this.fire,"Users");
    addDoc(dbRef,user);
  }
  googleAuth(e:any){
    this.users.google();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss','../signup/signup.component.scss']
})
export class SigninComponent {
  constructor( private checkStore: UserService, private route:Router){

  }

  User: IUser = {
    Username: '',
    email:"",
    password: '',
    id:0,
  }

  Submit(e:any,user:IUser){
    this.checkStore.signIn(user);
  }
  
  googleSignIn(e:any){
    this.checkStore.google()
  }
}

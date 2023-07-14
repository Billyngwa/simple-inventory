import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { IUser } from '../interfaces/iuser';
import { LocalstoreService } from './localstore.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private Store: LocalstoreService, 
    private authservice: AuthenticationService
    ) { }

  signUp(User: IUser) {
    this.authservice.signUp(User);
  }

  signIn(User: IUser) {
    this.authservice.signIn(User);
  }
  google() {
    this.authservice.googleSignIn()
  }
  facebook() {
    this.authservice.facebookSignIn()
  }
}

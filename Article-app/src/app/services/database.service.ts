import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(private fire:Firestore) { }
  dbRef = collection(this.fire,"Users")
  // addDoc(dbRef,)

}

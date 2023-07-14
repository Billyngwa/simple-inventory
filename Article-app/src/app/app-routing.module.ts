import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InventoryAppComponent } from './components/inventory-app/inventory-app.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  
  {path:"inventory-app", component:InventoryAppComponent},
  {path:"sign-up", component:SignupComponent},
  {path:"sign-in", component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

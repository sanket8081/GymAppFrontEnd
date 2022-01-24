import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './dashboard/user-home/user-home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [
  {path:"",component:UserLoginComponent},
  {path:"app-user-login",component:UserLoginComponent},
  {path:"app-user-registration",component:UserRegistrationComponent},
  {path:"app-user-home",component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

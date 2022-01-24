import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegistrationComponent
  ],
 
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],

  exports:[
    UserLoginComponent,
    UserRegistrationComponent
  ]

  
})
export class UserModule { }

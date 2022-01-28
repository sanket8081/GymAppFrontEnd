import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { Users } from 'src/app/users';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userEmailId:String = "";
  userPassword:String = "";

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userEmailId="";
    this.userPassword=""
   

  }

  
  userLogin(){

      this.userService.getAllUserLoginDetail(this.userEmailId).subscribe(
        (response:Users) =>{
          
          //console.log(response);
          if(this.userEmailId == response.emailId && this.userPassword === response.password)
          {
            //console.log("Inside Login",this.userEmailId);
            Swal.fire({
              title: 'Success!',
              text: 'Login Successfull!!',
              icon: 'success'
            })
            this.router.navigate(["app-user-home"]);
          }
          else{
            Swal.fire({
              title: 'Error!',
              text: 'Please check your credentials!!',
              icon: 'error'
            })
          }
        },
        (error)=>{
          //console.log(error.error.message);
          Swal.fire({
            title: 'Error!',
            text: error.error.message,
            icon: 'error'
          })
        }
        
      );
  }



}

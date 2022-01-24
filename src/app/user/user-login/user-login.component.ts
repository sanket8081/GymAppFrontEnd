import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';


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
    this.userEmailId="admin@root.com";
    this.userPassword="root"

  }

  userLogin(){
    if(this.userEmailId.includes("admin") && this.userPassword === "root")
    {
      console.log("Inside Login",this.userEmailId);
      this.router.navigate(["app-user-home"]);
      
    }
    
  }



}

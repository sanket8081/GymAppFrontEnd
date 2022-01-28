import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Users } from 'src/app/users';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userId: string= "";
  photoId: string= "";
  userName: string= "";
  userPassword: string= "";
  userEmailId: string= "";
  contactNumber: number= 0;
  address: string= "";
  dob: string ="";
  isAdmin: string= "";
  freeze: string= "";
  freezeDate: string= "";
  effectiveDate: string= "";
  expirationDate: string= "";

  constructor(){}
  ngOnInit(): void {
    this.userId = "";
    this.userName= "";
    this.userPassword= "";
    this.userEmailId= "";
    this.contactNumber= 0;
    this.address = "";
    this.dob= "";
    this.isAdmin= "Y";
    this.freeze= "N";
    this.freezeDate= "";
    this.effectiveDate = formatDate(Date.now(),'yyyy-MM-dd','en-US');;
    this.expirationDate= "";
  }
  
  userRegister()
  {
    console.log(this.userName);
    this.userId = ((this.userName.split(" ")[0]+this.userName.split(" ")[1].substring(0,2)).toLowerCase());
    console.log(this.effectiveDate);
  }
}

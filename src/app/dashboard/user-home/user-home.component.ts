import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  userDetails: Users[] = [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserDetails().subscribe(
      (response:Users[]) => {
        this.userDetails = response;
      }
    );
  }

}

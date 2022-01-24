import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient){

  }
  getAllUserDetails():Observable<Users[]>
  {
    return this.httpClient.get<Users[]>("http://localhost:8080/api/v1/users");
  }

}

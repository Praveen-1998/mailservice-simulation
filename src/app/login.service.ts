import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  backEndUrl = 'http://localhost:3000';

  postLoginDetails(loginDetails) {
    return this.http.post(`${this.backEndUrl}/postLoginDetails` , loginDetails);
  }


  postForgottPasswordDetails(passwordDetails) {
    return this.http.post(`${this.backEndUrl}/postForgottPasswordDetails` , passwordDetails);
  }
}

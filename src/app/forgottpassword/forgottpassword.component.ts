import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgottpassword',
  templateUrl: './forgottpassword.component.html',
  styleUrls: ['./forgottpassword.component.css']
})
export class ForgottpasswordComponent implements OnInit {

  constructor(private loginService: LoginService , private router: Router ) { }

  changePassword(form: NgForm) {
    console.log(form.value);
    this.loginService.postForgottPasswordDetails(form.value).subscribe(details => {
      console.log(details);
      if (details[0] === 'password changed successfully'){
this.router.navigateByUrl('/login');
      }
    }, err => {
      console.log(err);
    }, () => {
      console.log('password changed successfullly');
    });
  }
  ngOnInit() {
  }

}

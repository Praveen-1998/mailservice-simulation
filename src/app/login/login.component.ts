import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit() {
  }


login(form: NgForm) {
console.log(form.value);
this.loginService.postLoginDetails(form.value).subscribe(details => {
  if (details[0] ===  'User doesnot exists') {
alert('user Does not exists please Register');
this.router.navigateByUrl('/register');
  } else {
    this.router.navigateByUrl('/');
  }
  console.log(details);
}, err => {
  console.log(err);
}, () => {
  console.log('login details posted successfully');
});
  }
}

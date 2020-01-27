import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regService: RegisterService, private router: Router) { }


  register(form: NgForm) {
console.log(form.value);
this.regService.postRegisteredDetails(form.value).subscribe(registeredDetails => {
  if (registeredDetails[0] ===  'user already exists') {
    alert('User already exists please Login');
      } else {
        this.router.navigateByUrl('/login');
      }

}, err => {
  console.log(err);
}, () => {
  console.log('user Registerd successfully');
});
  }
  ngOnInit() {
  }

}

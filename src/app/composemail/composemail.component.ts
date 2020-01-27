import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComposemailService } from '../composemail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-composemail',
  templateUrl: './composemail.component.html',
  styleUrls: ['./composemail.component.css']
})
export class ComposemailComponent implements OnInit {

  constructor(private emailService: ComposemailService , private router: Router) { }

  sendEmail(form: NgForm) {
this.emailService.postEmail(form.value).subscribe(emaildetails => {
  console.log('emaildetails', emaildetails);
  if (emaildetails[0] === 'user does not exists') {
alert('user Does not registered please register first');
this.router.navigateByUrl('/register');
  } else {
    this.router.navigateByUrl('/');
  }
}, err => {
  console.log(err);
}, () => {
  console.log('email sent successfullly');
});
  }
  ngOnInit() {
  }

}

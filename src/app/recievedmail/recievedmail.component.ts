import { Component, OnInit } from '@angular/core';
import { ComposemailService } from '../composemail.service';

@Component({
  selector: 'app-recievedmail',
  templateUrl: './recievedmail.component.html',
  styleUrls: ['./recievedmail.component.css']
})
export class RecievedmailComponent implements OnInit {
  sentEmails: any = [];
  deletedEmails: any = [];

  constructor(private mailService: ComposemailService) {
    this.getSentEmail();
  }


  getSentEmail() {
   this.mailService.getEmail();
  }


  deleteRecievedEmail(id) {
    console.log(id);
    this.mailService.deleterecieveEmail(id);
  }
  ngOnInit() {
  }

}

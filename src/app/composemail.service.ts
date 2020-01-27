import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComposemailService {
  sentEmails: any = [];
  deletedEmails: any = [];

  backEndUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  postEmail(emailDetails) {
    return this.http.post(`${this.backEndUrl}/postEmail` , emailDetails);
  }
  getEmail() {
   this.http.get(`${this.backEndUrl}/getSentEmail`).subscribe(emails => {
      console.log(emails);
      this.sentEmails = emails;
    }, err => {
      console.log(err);
    }, () => {
      console.log('sent Emails got successfully');
    });
  }

  deleterecieveEmail(id) {
    this.http.delete(`${this.backEndUrl}/deleteEmail/${id}`).subscribe(emails => {
      console.log(emails);
      this.deletedEmails = emails;
      // this.getSentEmail();
    }, err => {
      console.log(err);
    }, () => {
      console.log('Emails deleted successfully');
    });
  }
  deleteSentEmail(id) {
    this.http.delete(`${this.backEndUrl}/deleteSentEmail/${id}`).subscribe(emails => {
      console.log(emails);
    }, err => {
      console.log(err);
    }, () => {
      console.log('Emails deleted successfully');
    });
  }
}

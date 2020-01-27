import { Component, OnInit } from '@angular/core';
import { ComposemailService } from '../composemail.service';

@Component({
  selector: 'app-sent-items',
  templateUrl: './sent-items.component.html',
  styleUrls: ['./sent-items.component.css']
})
export class SentItemsComponent implements OnInit {

  constructor(private mailService: ComposemailService) { }

  ngOnInit() {
  }

  deleteSentEmail(id) {
    console.log(id);
    this.mailService.deleteSentEmail(id);
  }
}

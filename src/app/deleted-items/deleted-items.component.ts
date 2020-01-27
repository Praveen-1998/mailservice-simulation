import { Component, OnInit } from '@angular/core';
import { ComposemailService } from '../composemail.service';

@Component({
  selector: 'app-deleted-items',
  templateUrl: './deleted-items.component.html',
  styleUrls: ['./deleted-items.component.css']
})
export class DeletedItemsComponent implements OnInit {

  constructor(private mailService: ComposemailService) { }

  ngOnInit() {
  }

}

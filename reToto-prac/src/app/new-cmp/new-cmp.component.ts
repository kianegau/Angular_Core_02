import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  constructor(private dateNow: UserService) { }
TodateDAte;
componentProperries;
  ngOnInit() {
    this.TodateDAte = this.dateNow.getTodayDate();
    console.log(this.dateNow.serviceProperties);
    this.dateNow.serviceProperties = ' component create';
  }

}

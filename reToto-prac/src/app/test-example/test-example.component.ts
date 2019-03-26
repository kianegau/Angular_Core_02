import { Component, OnInit } from '@angular/core';
import { Example } from '../test-di';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.css']
})
export class TestExampleComponent implements OnInit {

  constructor(private example: UserService) {
   }
todaydate;
newComponent;
  ngOnInit() {
this.todaydate = this.example.getTodayDate();
this.newComponent = this.example.serviceProperties;
  }

}

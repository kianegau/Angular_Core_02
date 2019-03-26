import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent  implements OnInit {
  constructor(private userService: UserService) {}
  // tslint:disable-next-line:member-ordering
  title = 'reToto-prac';
  users: User[];
  todayDate;
  ngOnInit(): void {
    // this.userService.getUser().then(users => this.users = users);
    this.todayDate = this.userService.getTodayDate();
  }
}


// Service are just classes, chỉ chứa code logic, tách biệt khỏi view, thực hiện theo nguyên tắc single respository
// Use Cases: Tất cả các request HTTP được gói bởi một service

// Injected is commomly as a services
// Dependencies are passed as singleton


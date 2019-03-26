import { Component } from '@angular/core';
import { ListTodo } from './class/Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: ListTodo[] = [];
  title = 'todo-app';
  handleInput($event) {
  this.data.push(new ListTodo($event.target.value));
  console.log($event.target.value);
  $event.target.value = '';
  }
}

import { Component } from '@angular/core';
import { ListTodo } from 'class/Data.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reTodo-app';
  color: string;
  data: ListTodo[] = [];
  NewData: ListTodo;
  handleInput($event) {
  this.data.push(new ListTodo($event.target.value));
  console.log($event.target.value);
  $event.target.value = '';
  }
  appHanldeDelete($event) {
  this.data = this.data.filter(x => x.id !== $event);
  }
  appHandleComplete($event) {
  //  this.NewData = this.data.find(x => x.id === $event);
  //  this.NewData.isCompleted = ! this.NewData.isCompleted;
  this.data.find(x => x.id === $event).isCompleted = ! this.data.find(x => x.id === $event).isCompleted;
  }
}

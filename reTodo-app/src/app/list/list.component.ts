import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListTodo } from 'class/Data.';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() dataList: ListTodo[] = [];
  @Output() listPressDelete = new EventEmitter();
  @Output() listPressComplete = new EventEmitter();
  listDelete($event) {
  this.listPressDelete.emit($event);
  console.log($event);
  }
  listComplete($event) {
    this.listPressComplete.emit($event);
  }
  ngOnInit() {

  }

}

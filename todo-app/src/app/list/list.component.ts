import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListTodo } from '../class/Data';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() dataList: ListTodo[] = [];
  @Output() listPressDelete = new EventEmitter();
  ngOnInit() {

  }

  handlePressDelete($event) {
  this.listPressDelete.emit($event);
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListTodo } from 'class/Data.';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() ItemValue: ListTodo;
  @Output() handlePressDelete = new EventEmitter();
  @Output() handlePressComplete = new EventEmitter();
  ngOnInit() {

  }
  handleDelete($event) {
  this.handlePressDelete.emit($event);
  console.log($event);
  }
  handleComplete($event) {
    this.handlePressComplete.emit($event);
  }
  checkComplete($event) {
    if ($event === true) {
      return true;
    }

    return false;
  }

}

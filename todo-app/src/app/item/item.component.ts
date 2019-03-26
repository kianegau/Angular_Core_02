import { Component, OnInit, Input, Output } from '@angular/core';
import { ListTodo } from '../class/Data';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }
  @Input() ItemValue: ListTodo;
  @Output() handlePressDelete = new EventEmitter();
  ngOnInit() {
    console.log(this.ItemValue);
  }
  handleDelete($event) {
  this.handlePressDelete.emit($event);
  }

}

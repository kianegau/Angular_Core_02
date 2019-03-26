import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  constructor() {}

  @Output() handlePressEnter = new EventEmitter();
  handleEnter($event) {
    this.handlePressEnter.emit($event);
  }
  ngOnInit() {}
}

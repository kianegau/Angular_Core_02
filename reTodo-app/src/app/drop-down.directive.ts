import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private element: ElementRef) { }
  @HostListener('mouseenter') onmouseenter() {
    this.dropDown('red');
  }

  @HostListener('mouseleave') onmouseleaveuse() {
    this.dropDown('black');
  }

private dropDown(list: string) {
  this.element.nativeElement.style.color = list;
}
}

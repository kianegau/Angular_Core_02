import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) {}

  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;
  @HostListener('mouseenter') onmouseenter() {
  this.highlight(this.highlightColor || this.defaultColor || 'green');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
  // Pass values into the directive with an @Input data binding


}

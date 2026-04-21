import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  color:string = ''

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseover')
  OnMouseOver() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout')
  OnMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('click')
  OnClick() {
    this.el.nativeElement.style.backgroundColor = this.el.nativeElement.style.backgroundColor === 'red' ? '' : 'red';
  }


}

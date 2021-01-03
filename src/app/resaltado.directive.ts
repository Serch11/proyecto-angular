import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(el:ElementRef) { 
      let element  = el.nativeElement;
      element.style.color = "red";
      element.style.backgroundColor = "black";
      element.style.padding = "10px";
      element.style.width = "50%";
      element.style.textAlign = "center";
  }

}

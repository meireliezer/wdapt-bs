import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appHoverSpy]'
})
export class HoverSpyDirective {

  

  @HostListener('click') onMouseClick(){
    console.log('HoverSpyDirective, click');
  }


  @HostListener('mouseenter') onMouseEnter(event){
    console.log('HoverSpyDirective, mouseenter');
    this.opacity =  1;
  }

  @HostListener('mouseleave') onMouseLeave(event){
    console.log('HoverSpyDirective, mouseleave');
    this.opacity =  0;
  
  }

  @HostBinding('style.opacity') opacity:number = 0;

  constructor(private el:ElementRef)   {
    console.log('HoverSpyDirective', el)
   }

}

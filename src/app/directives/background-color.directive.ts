import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective  implements OnInit{

  @Input('appBackgroundColor') temprature:number =0

  constructor(private el:ElementRef) { }
ngOnInit(): void {
    this.setColor()
}

setColor(){

  if(this.temprature > 0){
    this.el.nativeElement.style.backgroundColor = 'blue'

  }
  else if(this.temprature >=10 && this.temprature <= 25){
    this.el.nativeElement.style.backgroundColor = 'green'

  }
  else{
    this.el.nativeElement.style.backgroundColor = 'red'

  }
}
}

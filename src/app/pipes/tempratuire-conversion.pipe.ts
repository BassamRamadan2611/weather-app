import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempratuireConversion',
  standalone: true
})
export class TempratuireConversionPipe implements PipeTransform {

  transform(value:number,unit:String): number | null {
    if(value && !isNaN(value)){
      if(unit === 'C'){
        return (value -32) * 5 / 9
      }
      else if (unit === 'F'){
            return value
      }
    }
    return null;
  }

}

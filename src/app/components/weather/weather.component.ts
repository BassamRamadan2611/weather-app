import { Component, OnInit } from '@angular/core';
import { BackgroundColorDirective } from '../../directives/background-color.directive';
import { ActivatedRoute } from '@angular/router';
import { TempratuireConversionPipe } from '../../pipes/tempratuire-conversion.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    BackgroundColorDirective,
    TempratuireConversionPipe,
    CommonModule
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  temprature:number =0
  unit:string ='C'
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
      this.route.queryParams.subscribe(params=>{

        console.log(params)
        const currentTemprature = params['temprature']
        if(currentTemprature){
          this.temprature = +currentTemprature
        }
      })
  }

  toggleUnit(){
    this.unit =this.unit === 'C' ?'F':'C'
  }
}

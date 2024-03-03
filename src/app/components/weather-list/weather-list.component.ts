import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-list.component.html',
  styleUrl: './weather-list.component.css'
})
export class WeatherListComponent {
  searchText:any
  sortBy=''
  sortAccending:boolean = false
weatherList:any = [
  {city:'new yourk',temprature:20},
  {city:'cairo',temprature:10},
  {city:'tokyo',temprature:9},
  {city:'paris',temprature:25},
  {city:'alex',temprature:5},
  {city:'jerman ',temprature:33}
]
weatherListFiltered:any =[]
constructor(private router:Router){
this.weatherListFiltered = this.weatherList
}

filtercity(){
  if(!this.searchText){
    this.weatherListFiltered =this.weatherList
  }
  else{
    this.weatherListFiltered = this.weatherList.filter((cityWeather:any)=>{
      return cityWeather.city.toLowerCase().includes(this.searchText.toLowerCase())

    })
  }

}
navigateToWaether(temprature:number){
this.router.navigate(['/weather'],{queryParams:{temprature}})
}
sortWeatherList(property:any){
this.sortBy = property
this.sortAccending =!this.sortAccending

this.weatherListFiltered.sort((a:any,b:any)=>
{
  const avalue = a[property]
  const bvalue = b[property]

  if(avalue < bvalue){
    return this.sortAccending ? -1:1
  }
  else if (avalue > bvalue){
    return this.sortAccending ? 1:-1
  }
  return 0
})
}
}

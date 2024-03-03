import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';


export const routes: Routes = [
  {path:'', redirectTo :'weather', pathMatch :'full'},

  {path:'weather', component:WeatherComponent,title:'weather'},
  {path:'weather-list', component:WeatherListComponent,title:'weather-list'}



];

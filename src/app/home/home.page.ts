import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: WeatherService) {

    this.service.getWeatherdata().subscribe(data =>{

     console.log(data);

    });
  }

}

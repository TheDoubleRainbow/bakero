import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


interface WeatherData {
  coord: {lon: number, lat: number},
  weather: 
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }[]
  base: String,
  main: {
    temp: number,
    pressure: number,
    humidity: number,
    temp_min: number,
    temp_max: number,
  },
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  appId = "3266f6cee43fd792d469b260301721c1"

  getDataByGeopoint(lng: number, lat: number) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.appId}`) as Observable<WeatherData>;
  }
}

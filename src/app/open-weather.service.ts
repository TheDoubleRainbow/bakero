import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, combineLatest, } from 'rxjs';
import { map } from 'rxjs/operators';


interface WeatherData {
  coord: { lon: number, lat: number },
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
  cod: number,
  elevation: number,
}

interface Data {
  temp: number,
  pressure: number,
  humidity: number,
  elevation: number,
}

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(private http: HttpClient) { }

  appId = "3266f6cee43fd792d469b260301721c1";
  googleKey = "AIzaSyBe1z7-kcsUos92LHb3Qfq_km1WVLFrdtE";

  getDataByGeopoint(lng: number, lat: number) {
    // let date = new Date();
    // return combineLatest(
    //   // this.http.get(`http://api.openweathermap.org/pollution/v1/o3/${lat},${lng}/2019Z.json?appid=${this.appId}`),
    //   this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.appId}`),
    //   this.http.get(`https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},${lng}&key=${this.googleKey}`),
    // ).pipe(
    //   map(data => {
    //     // console.log(data);
    //     return { ...data[0], elevation: data[1]['results'][0].elevation };
    //   }
    //   )) as Observable<WeatherData>;

    // // this.http.get("https://maps.googleapis.com/maps/api/elevation/json?locations=${lat},&key=${this.googleKey}");
    return this.http.get(`https://bakero.herokuapp.com/api/data?lng=${lng}&lat=${lat}`) as Observable<Data>;
  }
}

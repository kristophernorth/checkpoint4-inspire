import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";


class WeathersService {

  async getWeathers() {
    const response = await api.get('api/weather')
    console.log('got weather', response.data);
    const weathers = response.data.map(weatherData => new Weather(weatherData))
    AppState.weathers = weathers
    console.log(AppState.weathers);
  }

}

export const weathersService = new WeathersService()
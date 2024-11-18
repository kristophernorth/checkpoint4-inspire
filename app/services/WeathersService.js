import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";


class WeathersService {

  async getWeathers() {
    const response = await api.get('api/weather')
    console.log('got weather', response.data);
    const weather = new Weather(response.data)
    // const image = new Image(response.data)
    AppState.weather = weather
    console.log(AppState.weather);
  }

}

export const weathersService = new WeathersService()
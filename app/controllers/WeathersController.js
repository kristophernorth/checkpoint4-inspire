import { AppState } from "../AppState.js";
import { weathersService } from "../services/WeathersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class WeathersController {
  constructor() {
    this.getWeather()
    AppState.on('weather', this.drawWeather)
  }

  async getWeather() {
    try {
      await weathersService.getWeathers()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawWeather() {
    const weathers = AppState.weather
    let htmlContent = ''
    setHTML('weather', htmlContent)
  }

}
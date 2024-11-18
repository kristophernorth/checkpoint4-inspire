


export class Weather {
  constructor(data) {
    this.temp = data.main.temp
    // this.fahrenheit = data.temp((${ this.temp } - 273.15) * 9 / 5 + 32))

    // this.name = data.name
    // this.weather = data.weather
    // this.description = data.weather..description
    // this.img = data.weather.icon
  }

  get temperatureTemplate() {
    return this.temp ? this.tempF : this.tempC
  }


  get tempF() {
    return `
    <span>((${this.temp} - 273.15) * 9/5 + 32)</span>℉
    `
  }

  get tempC() {
    return `
    <span>(${this.temp} - 273.15)</span>℃
    `
  }

}


// NOTE need a boolean to toggle C and F
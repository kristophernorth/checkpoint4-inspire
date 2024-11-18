import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class QuotesController {
  constructor() {
    this.getQuotes()
    AppState.on('quote', this.drawQuotes)
  }

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawQuotes() {
    const quotes = AppState.quote
    let htmlContent = ''
    setHTML('quote', htmlContent)
  }

}
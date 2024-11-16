import { AppState } from "../AppState.js";
import { quotesService } from "../services/QuotesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class QuotesController {

  async getQuotes() {
    try {
      await quotesService.getQuotes()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }


  drawWeathers() {
    const quotes = AppState.quotes
    let htmlContent = ''
    quotes.forEach(quote => htmlContent += quote.quoteTemplate)
    setHTML('quote', htmlContent)
  }

}
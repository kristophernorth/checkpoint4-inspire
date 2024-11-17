import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";


class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('got quotes', response.data);
    const quotes = response.data.map(quoteData => new Quote(quoteData))
    AppState.quotes = quotes
    console.log(AppState.quotes);
  }
}

export const quotesService = new QuotesService()
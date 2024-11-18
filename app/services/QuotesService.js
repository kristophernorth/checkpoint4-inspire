import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";


class QuotesService {

  async getQuotes() {
    const response = await api.get('api/quotes')
    console.log('got quotes', response.data);
    const quotes = new Quote(response.Data)
    AppState.quote = quotes
    console.log(AppState.quote);
  }
}

export const quotesService = new QuotesService()
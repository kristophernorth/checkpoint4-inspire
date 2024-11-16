
export class Quote {
  constructor(data) {
    this.quote = data.quote
    this.author = data.quote.author
    this.tags = data.quote.tags
    this.description = data.description
  }

  get quoteTemplate() {
    return `
  <p>${this.quote}</p>
  <p>${this.author}</p>
  `
  }

}

export class Quote {
  constructor(data) {
    this.quote = data.quote
    this.author = data.quote.author
    this.tags = data.quote.tags
    this.description = data.description
  }

  get quoteTemplate() {
    return `
    <div id="to-hover">
        <p>${this.quote}</p>
        <p id="to-show">${this.author}</p>
      </div>
      `
  }

}



// <p>${this.quote}</p>
// <p class="to-show">${this.author}</p>
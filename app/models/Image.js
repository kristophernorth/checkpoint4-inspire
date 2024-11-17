

export class Image {
  constructor(data) {
    this.imgUrl = data.largeImgUrl || data.imgUrl
    this.author = data.author
    this.query = data.query
  }

  get imageAuthorTemplate() {
    return `
      <p>Image by</p>
      <p>${this.author}</p>
  `
  }

}
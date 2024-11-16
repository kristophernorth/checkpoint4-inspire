

export class Image {
  constructor(data) {
    this.imgUrl = data.largeImgUrl || data.imgUrl
    this.author = data.author
    this.query = data.query
  }



}
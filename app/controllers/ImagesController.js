import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class ImagesController {
  constructor() {
    this.getImage()
    AppState.on('image', this.drawImage)
  }

  async getImage() {
    try {
      await imagesService.getImage()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawImage() {
    const images = AppState.image
    let htmlContent = ''
    setHTML('image-info', htmlContent)
    document.body.style.backgroundImage = `url(${AppState.image.imgUrl})`
  }

}
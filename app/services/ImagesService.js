import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";


class ImagesService {

  async getImages() {
    const response = await api.get('api/images')
    console.log('got images', response.data);
    const images = response.data.map(imageData => new Image(imageData))
    AppState.images = images
    console.log(AppState.images);
  }

}

export const imagesService = new ImagesService()
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js";


class ImagesService {

  async getImage() {
    const response = await api.get('api/images')
    console.log('got images', response.data);
    const image = new Image(response.data)
    AppState.image = image
    console.log(AppState.image);
  }

}

export const imagesService = new ImagesService()
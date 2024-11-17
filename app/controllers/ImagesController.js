import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class ImagesController {
  constructor() {
    this.getImage()
    AppState.on('image', this.drawImage)
    // AppState.on('todos', this.drawImage)
    // AppState.on('account', this.getImage)
    // AppState.on('account', this.drawImage)
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
    const images = AppState.images
    let htmlContent = ''
    images.forEach(image => htmlContent += image.imageAuthorTemplate)
    setHTML('image-info', htmlContent)
    document.body.style.backgroundImage = `url(${AppState.images})`
  }

}


//   drawTodos() {
//     const todos = AppState.todos
//     let htmlContent = ''
//     todos.forEach(todo => htmlContent += todo.todoListItem)
//     setHTML('todos', htmlContent)

//     const todoCountElm = document.getElementById('todo-count')
//     todoCountElm.innerText = AppState.todos.length.toString()
//
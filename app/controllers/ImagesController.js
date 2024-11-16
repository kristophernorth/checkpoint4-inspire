import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { Pop } from "../utils/Pop.js";


export class ImagesController {
  constructor() {
    this.drawImage()
  }

  async getImages() {
    try {
      await imagesService.getImages
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  drawImage() {
    document.body.style.backgroundImage = `url(${AppState.images.imgUrl})`
  }

}


//   drawTodos() {
//     const todos = AppState.todos
//     let htmlContent = ''
//     todos.forEach(todo => htmlContent += todo.todoListItem)
//     setHTML('todos', htmlContent)

//     const todoCountElm = document.getElementById('todo-count')
//     todoCountElm.innerText = AppState.todos.length.toString()
//   }

//   document.body.style.backgroundImage = `url(${AppState.activeApod.imgUrl})`
// }
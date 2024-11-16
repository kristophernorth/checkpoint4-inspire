import { AuthController } from './controllers/AuthController.js';
import { ImagesController } from './controllers/ImagesController.js';
import { TodosController } from './controllers/TodosController.js';
import { WeathersController } from './controllers/WeathersController.js';
import { router } from './router-config.js';
import { QuotesController } from './services/QuotesService.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  TodosController = new TodosController()
  WeathersController = new WeathersController()
  ImagesController = new ImagesController
  QuotesController = new QuotesController

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app

import { AppState } from "../AppState.js";
import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML, setText } from "../utils/Writer.js";


export class TodosController {
  constructor() {
    console.log('todos are here');
    AppState.on('todos', this.drawTodos)
    AppState.on('account', this.getTodos)
    AppState.on('account', this.drawTodos)
  }

  async createTodo() {
    try {
      event.preventDefault()
      const todoFormElem = event.target
      const todoData = getFormData(todoFormElem)
      await todosService.createTodo(todoData)
      todoFormElem.reset()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      Pop.error(error)
      console.error(error);
    }
  }

  async checkedTodo(todoId) {
    try {
      console.log('checked todo', todoId);
      todosService.checkedTodo(todoId)
    } catch (error) {
      console.error(error);
      Pop.toast("Couldn't update todo status")
    }
  }

  async deleteTodo(todoId) {
    try {
      const wantsToDelete = await Pop.confirm('Are you 100% sure you want to delete this todo', 'It will be gone and never to be seen again!')
      if (!wantsToDelete) return
      await todosService.deleteTodo(todoId)
    } catch (error) {
      Pop.error(error)
    }
  }

  drawTodos() {
    const todos = AppState.todos
    let htmlContent = ''
    todos.forEach(todo => htmlContent += todo.todoListItem)
    setHTML('todos', htmlContent)
    // const todoCountElm = document.getElementById('todo-count')
    // // NOTE - make sure we count the uncompleted todos - spellbook
    // todoCountElm.innerText = AppState.todos.length.toString()

    let todoCountElm = AppState.todos.filter(todo => todo.completed == false)
    setText('todo-count', `${todoCountElm.length}`)
  }
}
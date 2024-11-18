import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js"


class TodosService {

  async getTodos() {
    const response = await api.get('api/todos')
    console.log('got todos', response.data);
    const todos = response.data.map(todoData => new Todo(todoData))
    AppState.todos = todos
    console.log(AppState.todos);
  }

  async createTodo(formData) {
    const response = await api.post('api/todos', formData)
    console.log('created todo', response.data);
    const createdTodo = new Todo(response.data)
    AppState.todos.unshift(createdTodo)
  }

  async deleteTodo(todoId) {
    const response = await api.delete(`api/todos/${todoId}`)
    console.log('deleted todos', response.data);
    const todoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
    AppState.todos.splice(todoIndex, 1)
  }

  async checkedTodo(todoId) {
    // const response = await api.put(`api/todos/${todoId}`)
    console.log('checked todo', todoId);
    const todoToUpdate = AppState.todos.find(todo => todo.id == todoId)
    console.log('checkbox is updated', todoToUpdate);
    // NOTE - we aren't actually changing data here - spellbook - prepare spell - line below is potentially the issue
    todoToUpdate.completed = !todoToUpdate.completed

    const response = await api.put(`api/todos/${todoId}`, todoToUpdate)
    console.log('updated', response.data);
    AppState.emit('todos')
  }

}


export const todosService = new TodosService()
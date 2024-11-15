import { AppState } from "../AppState.js"


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.description = data.description
    this.creatorId = data.creatorId
  }

  get todoListItem() {
    return `
      <p><span>${this.completedCheckbox}</span><span>${this.description}</span><span>${this.deleteButton}</span></p>
    `
  }


  get completedCheckbox() {
    return `
      <form onsubmit"app.TodosController.updateTodoStatus()">
        <input type="checkbox" name="todo" value="${this.completed}">
        <label for="todo"></label>
      </form>
    `
  }

  get deleteButton() {
    if (this.creatorId != AppState.account.id) return ''
    return `
      <button onclick="app.TodosController.deleteTodo('${this.id}')" class="btn btn-danger" title="Delete this todo">🚮</button>
    `
  }






}
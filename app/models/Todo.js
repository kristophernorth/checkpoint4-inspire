import { AppState } from "../AppState.js"


export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description
    this.creatorId = data.creatorId
  }

  get todoListItem() {
    // NOTE - check spellbook for adding a checked attribute
    return `
      <p><input onchange="app.TodosController.checkedTodo('${this.id}')" ${this.isChecked} type="checkbox"> <span>${this.description}</span><span>${this.deleteButton}</span></p>
    `
  }

  get deleteButton() {
    if (this.creatorId != AppState.account.id) return ''
    return `
      <button onclick="app.TodosController.deleteTodo('${this.id}')" class="btn btn-danger" title="Delete this todo">🚮</button>
    `
  }

  get isChecked() {
    if (this.completed) return 'checked'
    return ''
  }


}
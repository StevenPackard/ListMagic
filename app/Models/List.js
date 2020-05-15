import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name
    this.color = data.color
    /** @type {String[]} */
    this.tasks = data.tasks || []
  }


  get Template() {
    return /*html*/`
      <div class="col-3 mt-3">
        <div class="card shadow">
          <div class="card-body d-flex flex-column">
            <i class="fas fa-times text-danger align-self-end action"
              onclick="app.listController.deleteList('${this.id}')"></i>
            <h4 class="card-title">${this.name}</h4>
            <ul class="pl-3">
            ${this.TaskTemplate}
            </ul>
            <form onsubmit="app.listController.addTask(event, '${this.id}')">
              <div class="form-group d-flex">
                <input type="text" class="form-control" name="task" id="task" aria-describedby="helpId"
                  placeholder="Task..." required>
                <button type="submit" class="btn btn-outline-success ml-1"><i class="fas fa-plus "></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
  `
  }



  get TaskTemplate() {
    let template = ""
    this.tasks.forEach((task, index) => {
      template += /*html*/`
      <li>${task}
        <i class="fas fa-times text-danger action"
          onclick="app.listController.deleteTask('${this.id}', ${index})"></i>
      </li>
      `
    })
    return template
  }
}

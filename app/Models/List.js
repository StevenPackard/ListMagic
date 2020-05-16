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
    <div class="col-9 col-lg-3 list-border d-flex flex-column my-4 mx-3 tall-list">
    <div class="row h-100">
      <div class="col-12 d-flex flex-column round-top mb-2 wrap color-short" style="background-color: ${this.color};">
        <i class="fas fa-lg fa-times text-light align-self-end action mt-2" onclick="app.listController.deleteList('${this.id}')"></i>
        <h3 class="text-center text-light pb-2">${this.name}</h3>
      </div>
      <div class="col-12 d-flex flex-column bg-white list-tall no-margin round-bottom list-font">
        <ul class="flex-grow-1 pl-2">
          ${this.TaskTemplate}
        </ul>
        <form class="justify-self-end" onsubmit="app.listController.addTask(event, '${this.id}')">
          <div class="form-group d-flex">
            <input type="text" class="form-control" name="task" id="task" aria-describedby="helpId"
              placeholder="Add task..." required autocomplete="off">
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
      <li class="my-2"> 
      <input type="checkbox"  id="" class="mr-2">
      ${task}
      <div class="text-right push-up">
      <i class="fa text-danger fa-trash action" onclick="app.listController.deleteTask('${this.id}', '${index}')" aria-hidden="true"></i>
      </div>
      </li>
      `
    })
    return template
  }
}

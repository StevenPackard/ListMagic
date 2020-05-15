import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let lists = store.State.lists
  let template = ""
  lists.forEach(l => template += l.Template)
  document.getElementById("list").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
  addList(event) {
    event.preventDefault();
    let formData = event.target
    let rawList = {
      name: formData.name.value,
      color: formData.color.value,
    }
    formData.reset();
    ListService.addList(rawList)
    _drawLists();
  }

  deleteList(id) {
    ListService.deleteList(id)
    _drawLists()
  }

  addTask(event, listId) {
    event.preventDefault();
    let formData = event.target
    let item = formData.task.value
    ListService.addTask(item, listId)
    formData.reset()
    _drawLists()
  }

  deleteTask(listId, index) {
    ListService.deleteTask(listId, index)
    _drawLists()
  }

}

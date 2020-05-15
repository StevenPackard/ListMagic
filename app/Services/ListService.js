import List from "../Models/List.js";
import store from "../store.js";

//Public
class ListService {

  addList(rawList) {
    let list = new List(rawList)
    store.State.lists.push(list)
    store.saveState()
  }

  deleteList(id) {
    let index = store.State.lists.findIndex(l => l.id == id)
    if (index == -1) {
      console.error("invalid id")
      return;
    }
    store.State.lists.splice(index, 1)
    store.saveState()
  }

  addTask(task, listId) {
    let list = store.State.lists.find(l => l.id == listId)
    list.tasks.push(task)
    store.saveState()
  }

  deleteTask(listId, index) {
    let list = store.State.lists.find(l => l.id == listId)
    list.tasks.splice(index, 1)
    store.saveState()
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;

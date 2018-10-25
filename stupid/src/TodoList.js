import Todo from './Todo.js';

class TodoList {
  constructor() {
    this.list = [];
  }

  addTodo(value) {
    let todo = new Todo(value, false);
    this.list.push(todo);
    return this.list;
  }

  changeTodoState(index) {
    this.list[index].done = (!this.list[index].done);
    return this.list;
  }

  getAlltodos() {
    return this.list;
  }

  getAlltodosValues() {
    let values = [];
    for (let i = 0; i < this.list.length; i++) {
      values.push(this.list[i].value);
    }
    return values;
  }

  getAlltodosButtons() {
    let buttons = [];
    for (let i = 0; i < this.list.length; i++) {
      buttons.push(this.list[i].done);
    }
    return buttons;
  }

  getDonetodos() {
    let doneList = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].done) {
        doneList.push(this.list[i]);
      }
    }
    return doneList;
  }

  getUndonetodos() {
    let undoneList = [];
    for (let i = 0; i < this.list.length; i++) {
      if (!this.list[i].done) {
        undoneList.push(this.list[i]);
      }
    }
    return undoneList;
  }
  deleteDonetodos() {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].done) {
        this.list.splice(i, 1);
      }
    }
    return this.list;
  }
  deleteByClick(index) {
    this.list.splice(index, 1);
    return this.list;
  }
}

export {TodoList};
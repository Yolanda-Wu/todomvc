import React from 'react';
import Todo from './Todo.js';

class TodoList {
  constructor() {
    this.todoList = [];
  }

  addTodo(value) {
    let todo = new Todo(value, false);
    this.todoList.push(todo);
    return this.todoList;
  }

  changeTodoState(index) {
    this.todoList[index].done = (!this.todoList[index].done);
    return this.todoList;
  }

  getAlltodos() {
    return this.todoList;
  }

  getDonetodos() {
    let doneList = [];
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].done) {
        doneList.push(this.todoList[i]);
      }
    }
    return doneList;
  }

  getUndonetodos() {
    let undoneList = [];
    for (let i = 0; i < this.todoList.length; i++) {
      if (!this.todoList[i].done) {
        undoneList.push(this.todoList[i]);
      }
    }
    return undoneList;
  }
  deleteDonetodos() {
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i].done) {
        this.todoList.splice(index, 1);
      }
    }
    return this.todoList;
  }
  deleteByClick(index) {
    this.todoList.splice(index, 1);
    return this.todoList;
  }
}

export {TodoList};
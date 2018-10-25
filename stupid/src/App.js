import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {todoList} from './index'
import { TodoList } from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span className="title">todos</span>
        </header>
        <main className="todoapp">
          <EnterInput />
          <section className="main"></section>
          <section className="footer"></section>
        </main>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by petehunt</p>
          <p>Part of TodoMVC</p>
        </footer>
      </div>
    );
  }
}

class EnterInput extends Component {
  constructor() {
    super();
  }
  render() {
    return <input className="newtodo" placeholder="What need to be done?" onKeyDown={this.addNewTodo}/>;
  }
  addNewTodo(event) {
    let todo = document.getElementsByClassName("newtodo")[0];
    if(event.keyCode == 13) {
      todoList.addTodo(todo.value);
      ReactDOM.render(<RefreshTodoList />, 
        document.getElementsByClassName("main")[0]);
      todo.value = '';
    }
  }
}

class RefreshTodoList extends Component {
  constructor() {
    super();
    this.todoList = todoList.getAlltodos();
    this.todoValues = todoList.getAlltodosValues();
    this.todoButtons = todoList.getAlltodosButtons();
  }

  render() {

    const lis = this.todoList.map((todoList) =>
      <li className="todoli" key={todoList.value}>
        <Checkbox checked={todoList.done}/>
        <label className="todovalue">{todoList.value}</label>
        <button className="destroy">delete</button>
      </li>
    );
    return (
      <ul>{lis}</ul>
    );
  }
}

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: props.checked};
  }

  changeCheckbox() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    return (
      <input 
        className="checkbox" 
        type="checkbox" 
        checked={this.state} 
        onChange={this.changeCheckbox}/>
    )
  }
}





export default App;

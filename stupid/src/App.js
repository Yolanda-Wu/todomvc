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
    if(event.keyCode === 13) {
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
    this.state = {refresh: 0}
  }

  handleKeyDown() {
    this.setState(preState => {
      return {refresh: preState.refresh　+ 1};
    })
  }

  render() {
    let i = 0;
    const lis = this.todoList.map((todoList) =>
      <li className="todoli" key={i}>
        <Checkbox checked={todoList.done} index={i}/>
        <Ainput value={todoList.value} index={i} onKeyDown={this.handleKeyDown.bind(this)}/>
        <button className="destroy" index={i++}>delete</button>
      </li>
    );
    return (
      <ul refresh={this.state.refresh}>{lis}</ul>
    );
  }
}

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.todoList = todoList.getAlltodos();
    this.state = {checked: props.checked};
  }

  changeCheckbox() {
    this.setState((preState) => {
      return {checked: !preState.checked}
    });
    this.todoList[this.index].done = !this.todoList[this.index].done;
    console.log(this.todoList);
  }

  render() {
    return (
      <input 
        className="checkbox" 
        type="checkbox" 
        checked={this.state.checked} 
        onChange={this.changeCheckbox.bind(this)}/>
    )
  }
}

class Ainput extends Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.index = props.index;
    this.todoList = todoList.getAlltodos();
    this.state = {value: props.value};
  }

  handleClick() {
    const node = this.myref.current;
    node.getElementsByClassName("hidden")[0].className = "edit";
    node.getElementsByClassName("todovalue")[0].className = "hidden";
  }

  handleKeyDown(e) {
    const node = this.myref.current;
    const label = node.getElementsByClassName("hidden")[0];
    const textarea = node.getElementsByClassName("edit")[0];
    let text;
    if(e.keyCode === 13 && textarea.value != '') {
      text = textarea.value;
      this.todoList[this.index].value = text;
      this.setState({value: text});
      label.className = "todovalue";
      textarea.className = "hidden";
    } else if ((e.keyCode === 13 && textarea.value === '') || (e.keyCode === 8 && textarea.value ==='')) {
      this.todoList.splice(this.index, 1);
      this.props.onKeyDown();
    }
  }

  render() {
    return (
      <div ref={this.myref}>
        <label
          className="todovalue"
          onDoubleClick={this.handleClick.bind(this)}>
          {this.state.value}
        </label>
        <textarea
          className="hidden"
          defaultValue={this.state.value}
          onKeyDown={this.handleKeyDown.bind(this)}></textarea>
      </div>
    )
  }
}




export default App;

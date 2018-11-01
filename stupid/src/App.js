import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {todoList} from './index'
import { TodoList } from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todosRefresh: 0, inquiryRefresh: 0};
  }

  handleNewAdd() {
    this.setState((prevState) => ({
      todosRefresh: prevState.todosRefresh++,
      inquiryRefresh: prevState.inquiryRefresh++
    }));
  }

  handleInquiryRefresh() {
    this.setState((prevState) => ({
      inquiryRefresh: prevState.inquiryRefresh++
    }));
  }

  render() {
    return (
      <div className="App">
        <header>
          <span className="title">todos</span>
        </header>
        <main className="todoapp">
          <EnterInput refreshTodoList={this.handleNewAdd.bind(this)}/>
          <RefreshTodoList refresh={this.state.todosRefresh} onChange={this.handleInquiryRefresh.bind(this)}/>
          <Inquiry refresh={this.state.inquiryRefresh} />
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
  constructor(props) {
    super(props);
    this.refreshTodoList = props.refreshTodoList;
  }
  render() {
    return <input className="newtodo" placeholder="What need to be done?" onKeyDown={this.addNewTodo.bind(this)}/>;
  }
  addNewTodo(event) {
    let todo = document.getElementsByClassName("newtodo")[0];
    if(event.keyCode === 13) {
      todoList.addTodo(todo.value);
      todo.value = '';
      this.refreshTodoList();
      //console.log(this.refreshTodoList);
      //console.log(todoList);
    }
  }
}

class RefreshTodoList extends Component {
  constructor(props) {
    super(props);
    this.todoList = todoList.getAlltodos();
    this.state = {refresh: 0};
  }

  handleKeyDown() {
    this.setState((prevState) => ({
      refresh: ++prevState.refresh
    }));
  }

  render() {
    let i = 0;
    //console.log(this.todoList);
    const lis = this.todoList.map((todo) =>
      <li className="todoli" key={todo.value}>
        <Checkbox checked={todo.done} index={i} onChange={this.props.onChange.bind(this)} />
        <Ainput 
          value={todo.value} index={i} 
          onKeyDown = {this.handleKeyDown.bind(this)} 
          onChange={this.props.onChange.bind(this)} />
        <button className="destroy" index={i++}>delete</button>
      </li>
    );
    return (
      <ul refresh={this.state.refresh}>{lis}</ul>
    );
  }
}

class Ainput extends Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
    this.todoList = todoList.getAlltodos();
    this.state = {value: props.value, index: props.index};
  }

  handleDoubleClick() {
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
      this.todoList[this.props.index].value = text;
      this.setState({value: text});
      label.className = "todovalue";
      textarea.className = "hidden";
    } else if ((e.keyCode === 13 && textarea.value === '') || (e.keyCode === 8 && textarea.value ==='')) {
      this.todoList.splice(this.props.index, 1);
      this.props.onChange();
      this.props.onKeyDown();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div ref={this.myref}>
        <label
          className="todovalue"
          onDoubleClick={this.handleDoubleClick.bind(this)}>
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

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.todoList = todoList.getAlltodos();
    this.state = {checked: props.checked};
  }

  changeCheckbox() {
    this.todoList[this.index].done = !this.todoList[this.index].done;
    this.props.onChange();
  }

  render() {
    return (
      <input 
        className="checkbox" 
        type="checkbox" 
        defaultChecked={this.state.checked} 
        onChange={this.changeCheckbox.bind(this)}/>
    )
  }
}

class Inquiry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <TodoCount />
        <Filter />
        <button>Clear Completed</button>
      </footer>
    )
  }
}

class TodoCount extends Component {
  constructor(props) {
    super(props);
    this.count = todoList.getUndonetodos().length;
    this.str = "";
  }

  render() {
    this.count = todoList.getUndonetodos().length;
    if (this.count === 1) {
      this.str = "item";
    } else {
      this.str = "items";
    }
    return (
      <span>
        <span>{this.count}</span>
        <span>{this.str}</span>
        <span>left</span>
      </span>
    )
  }
}

class Filter extends Component {
  constructor(props) {
    super(props);
    this.allRef = null;
    this.activeRef = null;
    this.completedRef = null;
    this.getAllRef = element => {
      this.allRef = element;
    };
    this.getActiveRef = element => {
      this.activeRef = element;
    };
    this.completedRef = element => {
      this.completedRef = element;
    }
  }

  handleClick() {
    
  }

  render() {
    return (
      <ul>
        <li key="All">
          <a onClick={this.handleClick.bind(this)} ref={this.getAllRef}>All</a>
        </li>
        <li key="Active">
          <a onClick={this.handleClick.bind(this)} ref={this.getActiveRef}>Active</a>
        </li>
        <li key="Compeleted">
          <a onClick={this.handleClick.bind(this)} ref={this.getCompletedRef}>Completed</a>
        </li>
      </ul>
    )
  }
}


/*
class RefreshTodoList extends Component {
  constructor(props) {
    super(props);
    this.todoList = todoList.getAlltodos();
    this.todoValues = todoList.getAlltodosValues();
    this.todoButtons = todoList.getAlltodosButtons();
    this.state = {todoList: this.todoList};
  }

  handleKeyDown() {
    this.setState({todoList: this.todoList});
  }

  render() {
    let i = 0;
    const lis = this.state.todoList.map((todo) =>
      <li className="todoli" key={i}>
        <Checkbox checked={todo.done} index={i}/>
        <Ainput value={todo.value} index={i} onKeyDown = {this.handleKeyDown.bind(this)}/>
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
      label.className = "todovalue";
      textarea.className = "hidden";
      this.setState({value: text});
      this.props.onKeyDown();
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <div ref={this.myref}>
        <label
          className="todovalue"
          onDoubleClick={this.handleClick.bind(this)}>
          {this.props.value}
        </label>
        <textarea
          className="hidden"
          defaultValue={this.props.value}
          onKeyDown={this.handleKeyDown.bind(this)}></textarea>
      </div>
    )
  }
}
*/



export default App;

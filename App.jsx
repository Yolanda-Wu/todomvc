import React from './node_modules/react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList.js';

class App extends React.Component {
  constructor() {
    this.todoList = new TodoList();
  };
  
  originPage() {
    const element = <NewtodoEn />;
    ReactDOM.render(
    element,
    document.getElementsByClassName("todoapp")[0]
    );
  }
}

const element = <NewtodoEn />;
    ReactDOM.render(
    element,
    document.getElementsByClassName("todoapp")[0]
    );

class NewtodoEnter extends React.Component {
  render() {
    return(<input className="new_todo" placeholder="What needs to be done?" />)
  }
}

let addNewTodo = function(e, value) {
  if (event.keyCode === 13) {
    todos.push(value);
    const element = <Todolist value={value} />;
    ReactDOM.render(
      element,
      document.getElementsByClassName("main")[0]
    )
  }
}

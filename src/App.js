import React, { Component } from 'react';
import './App.css';
import Todos from './Todos.js'
import Header from './Header.js'
import AddTodo from './AddTodo.js'

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Item 1",
        completed: false
      },
      {
        id: 2,
        title: "Item 2",
        completed: true
      },
      {
        id: 3,
        title: "Item 3",
        completed: false
      }
    ]
  }

  completedTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title: title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} completedTodo={this.completedTodo} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

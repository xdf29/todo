import React, { Component } from 'react'
import Todo from './Todo.js'

export class Todos extends Component {
  render() {
    return (
        this.props.todos.map((todo) => {
            return (
                <Todo todo={todo} key={todo.id} completedTodo={this.props.completedTodo} deleteTodo={this.props.deleteTodo}/>
            )
        })
    )
  }
}

export default Todos

import React, { Component } from 'react'

export class Todo extends Component {

  getStyle(){
    return({
        padding: "5px",
        textDecoration: this.props.todo.completed ? "line-through" : "none",
        display: "inline-block"
    })
  }

  completedTodo = () => {
    this.props.completedTodo(this.props.todo.id)
  }

  deleteTodo = () => {
      this.props.deleteTodo(this.props.todo.id)
  }

  render() {
    return (
      <div style={{borderBottom: "1px solid black"}}>
        <input type="checkbox" checked={this.props.todo.completed} onChange={this.completedTodo}/>
        <h2 style={this.getStyle()}>{this.props.todo.title}</h2>
        <button style={buttonStyle} onClick={this.deleteTodo}>X</button>
      </div>
    )
  }
}

const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    border: "0px",
    borderRadius: "50%",
    padding: "4px 7px",
    fontSize: "10px",
    cursor: "pointer"
}

export default Todo

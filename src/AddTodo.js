import React, { Component } from 'react'

export class AddTodo extends Component {

  state = {
      title: ""
  }

  updateTitle = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({
        title: ""
    })
  }

  render() {
    return (
      <div>
        <form style={{display:"flex"}}>
            <input type="text" name="title" placeholder="Add Todo ..." style={{flex:"10", padding:"5px"}} onChange={this.updateTitle}/>
            <input type="submit" value="Submit" style={{flex:"1"}} onClick={this.addTodo} />
        </form>
      </div>
    )
  }
}

export default AddTodo

import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (<li key={this.props.todo.id}> {this.props.todo.name} { this.props.todo.completed?<span>- compoleted</span> : <span></span>}</li>)
  }
}
import React, { Component } from 'react'

import List from './List'
import Input from './Input'


export default class Searchapp extends Component {

  state = {
    todos: ['Click to remove', 'Learn React', 'Write Code', 'Ship App'],
  }

  onAddTodo = (text) => {
    const {todos} = this.state

    this.setState({
      todos: [text, ...todos],
    })
  }

  onRemoveTodo = (index) => {
    const {todos} = this.state

    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    })
  }

  render() {
    const {todos} = this.state

    return (
      <div >
      <List
          list={todos}
          onClickItem={this.onRemoveTodo}>
        
        </List>
        <Input
          placeholder={'Type a search tem and press enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  }
}

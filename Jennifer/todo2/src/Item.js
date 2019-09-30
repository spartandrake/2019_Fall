import React, { Component } from 'react'

class Item extends Component {
  createTasks = item => {
    return (
      <li key={item.key}>{item.text} <button onClick={() => this.props.deleteItem(item.key)}type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span> </button></li>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default Item
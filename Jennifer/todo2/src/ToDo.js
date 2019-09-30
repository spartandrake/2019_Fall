import React, { Component } from 'react'
class ToDo extends Component {
    
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem}>
            <input
              placeholder="What do you need to do?"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit"> Add Your To-Do Task </button>
          </form>
        </div>
      </div>
    )
  }
}
  
  
  export default ToDo
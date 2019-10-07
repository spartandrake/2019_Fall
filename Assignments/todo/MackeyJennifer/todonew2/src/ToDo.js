
import React, { Component } from 'react';

class ToDo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      fakeData: [{
        id: '1',
        title: 'Create To-Do App',
        isComplete: false,
      }]
    }
  }

  editItem(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
  }


  deleteItem() {
    let id = arguments[0];

    this.setState({
      fakeData: this.state.fakeData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }


 onComplete() {
    let id = arguments[0];

    this.setState({
      fakeData: this.state.fakeData.map(item => {
        if (item.id === id) {
          item['isComplete'] = true;
          return item;
        }

        return item;
      })
    });
  }

  addItem(event) {
    event.preventDefault();

    this.setState({
      fakeData: [...this.state.fakeData, {
        id: Date.now(),
        title: event.target.item.value,
        done: false,
        date: new Date()
      }]
    });

    event.target.item.value = '';
  }

  editForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdate.bind(this)}>
        <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
        <button className="update-add-item">Update</button>
      </form>
    }
  }

  
  onUpdate(event) {
    event.preventDefault();

    this.setState({
      fakeData: this.state.fakeData.map(item => {
        if (item.id === this.state.id) {
          item['title'] = event.target.updatedItem.value;
          return item;
        }

        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  render() {
    return (
      <div>
        <h1>To-Do List Tracker</h1>
        {this.editForm()}
        <form onSubmit={this.addItem.bind(this)}>
          <input type="text" placeholder="Add your task here!" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        
        <ul>
          {this.state.fakeData.map(item => (
            <li key={item.id} className={ item.isComplete ? 'done' : 'hidden' }>
              {item.title}
              <button onClick={this.deleteItem.bind(this, item.id)}>Delete</button>
              <button onClick={this.editItem.bind(this, item.id, item.title)}>Edit</button>
              <button onClick={this.onComplete.bind(this, item.id)}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;
import React from 'react';
import './App.css';
import TodoItems from './TodoItems';

const Header = () => {
  return(
    <div>
      <h1>Samantha Burkey Todo App</h1>
    </div>
  )
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Todo />

    </div>
  );
}

class Todo extends React.Component{
  constructor(props) {
    super(props);
   
    this.state = {
      items: []
    };
   
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  delete(key) {
    this.props.delete(key);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return (
      <div className="App-header">
        <Header />
        <div className="todoList">
          <div className="header">
            <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} 
                    placeholder="Task...">
              </input>
              <button type="submit">Add Task</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}
                 deleteItem={this.deleteItem}/>
        </div>
      </div>
    );
  }
}

export default Todo;

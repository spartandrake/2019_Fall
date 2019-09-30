// Mikael Hinton
// CS 329
// Aaron Freeland
// ToDo List

// Imports React and Components of React
import React, { Component } from 'react';
// Imports CSS from file
import './App.css';
// Imports logo from file
import logo from './To_Do_List.png';

// Maps the items to the list with index
const List = props => (
  <ol>
    {
      // Maps item to correct place in list and shows the list
      props.items.map((item, index) => 
      <li
      key={index}>{item}
      </li>)
    }
  </ol>
);

// Creates a todo & items list
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      items: []
    };
  }

  // onSubmit prevents refresh, then keeps the list and
  //  adds to the list 
  onSubmit = (event) => {
    // Prevents refresh
    event.preventDefault();
    // Sets value of next item and keeps the rest in list
    this.setState({
      todo: '',
      items: [...this.state.items, this.state.todo]
    });
  }

   // onChange assigns the value inputted to todo
   onChange = (event) => {
    this.setState({ todo: event.target.value });
  }

  // Logo with the form that submits the text inputted 
  render() {
    return (
      <div>
        {/* Image */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Form */}
        <form className="App" onSubmit={this.onSubmit}>
          {/* Input box */}
          <input value={this.state.todo} onChange={this.onChange} />
          <span> </span>

          {/* Button */}
          <button> Add + </button>
        </form>

        {/* List of Items */}
        <List items={this.state.items}/>
      </div>
    );
  }
}
export default App;

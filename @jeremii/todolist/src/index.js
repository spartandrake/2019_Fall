import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./App.css";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var items = [];
items.push({ index: 1, value: "Go jogging", done: true });
items.push({ index: 2, value: "Buy water", done: true });
items.push({ index: 3, value: "Call parents", done: false });
items.push({ index: 4, value: "Cut hair", done: false });
items.push({ index: 5, value: "Stand up", done: false });

class List extends Component {
  render() {
    var items = this.props.items.map((item, index) => {
      return (
        <ListItem
          key={index}
          item={item}
          index={index}
          checkOff={this.props.checkOff}
        />
      );
    });
    return <ul className="list-group"> {items} </ul>;
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickDone() {
    var index = parseInt(this.props.index);
    this.props.checkOff(index);
  }
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list">
        <div className={todoClass}>
          <div onClick={this.onClickDone}>&nbsp;</div>
          {this.props.item.value}
        </div>
      </li>
    );
  }
}

class Adder extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();
    var newValue = this.refs.itemName.value;

    if (newValue) {
      this.props.addItem({ newValue });
      this.refs.form.reset();
    }
  }
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="itemName"
          className="form-control"
          placeholder="add todo..."
        />
        <button type="submit" className="btn btn-default">
          +
        </button>
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.checkOff = this.checkOff.bind(this);
    this.state = { items: items };
  }
  addItem(item) {
    items.unshift({
      index: items.length + 1,
      value: item.newValue,
      done: false
    });
    this.setState({ items: items });
  }
  checkOff(ix) {
    var todo = items[ix];
    todo.done = !todo.done;
    this.setState({ items: items });
  }
  render() {
    return (
      <div id="main">
        <Adder addItem={this.addItem} />
        <List items={this.props.initItems} checkOff={this.checkOff} />
      </div>
    );
  }
}

ReactDOM.render(<App initItems={items} />, document.getElementById("root"));

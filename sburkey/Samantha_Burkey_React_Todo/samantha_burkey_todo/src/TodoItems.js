import React from 'react';

class TodoItems extends React.Component {
    createTasks = item => {
        return <li key={item.key} onClick={() => this.props.deleteItem(item.key)} 
                    > {item.text} </li>
      }
   
    render() {
      var todoEntries = this.props.entries;
      var listItems = todoEntries.map(this.createTasks);
   
      return (
        <ul className="mainList">
            {listItems}
        </ul>
      );
    }
  };
   
  export default TodoItems;

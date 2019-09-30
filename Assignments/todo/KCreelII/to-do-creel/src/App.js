import React, {useState} from 'react';
import './App.css';


// class ToDoApp extends React.Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       data:[]
//     }
//   }
//   addItem(val){
//     const todo = {toDo: val}
//     this.state.data.push(todo);
//     this.setItem({data : this.state.data});
//   }
//   handleRemove(toDo){
//     const remainder = this.state.data.filter((todo) => {
//       if(todo.toDo !== toDo) return toDo;
//     });
//     this.setItem({data: remainder});
//   }
//   render(){
//     return(
//       <div>
//         ayy
//       </div>
//     )
//   }
// }

const ListItems = ({ specialItems, removeItem, addItem, editItem}) => {
  let input;
 
  return (
    <div>
      <div>
        <input ref={node => {input = node;}}/>
        <button onClick={() => {
          addItem(input.value);
          input.value ='';
        }}>
          +
        </button>
      </div>
      <ul>
        {
          specialItems.map(item =>(
            <li>
              <a className={item.toDo}>{item.toDo}</a>
            
            <button onClick={() => {
              removeItem(item.toDo)
            }}> - </button>

            <button onClick={() => {
              removeItem(item.toDo);
              addItem(input.value);
              
              input.value ='';
            }}> edit </button>
            
            {/* <button onClick={() => {
              document.getElementsByClassName(item.toDo).style = "black";
            }}>

            </button> */}
            </li>
          ))
        
        }
      </ul>
    </div>
  )
}



function App() {
  const [items, setItem] = useState([{toDo: 'Add more to do'}],{toDo:'Y U NO WORK'});
  
  const addItem = (val) => {
    setItem([...items, {toDo: val}])
  }
  const removeItem = (val) => {
    setItem(items.filter(it => it.val !== val));
  }
  const editItem = (oldItem, newItem) =>{
    setItem([...items, {toDo: newItem}]);
    setItem(items.filter(it => it.oldItem !== oldItem));
  }
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="heading1">
          ToDo List
        </div>
        <ListItems specialItems={items} removeItem={removeItem} addItem={addItem} editItem={editItem}/>
      </header>
    </div>
  );
}

export default App;

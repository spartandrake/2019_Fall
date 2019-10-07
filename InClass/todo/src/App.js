import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Input, List } from 'semantic-ui-react';
import moment from 'moment';


function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: 'Sample todo..',
      completed: true,
      dateCreated: moment(new Date()).subtract('1', 'hours'),
      priority: 'low'
    },
    {
      id: 2,
      label: 'Fake data',
      completed: false,
      dateCreated: moment(new Date()).subtract('2', 'day'),
      priority: 'low'
    }
  ]);

  console.log(todos);
  return (
    <List divided relaxed>
      {
        todos.sort((a, b) => a.completed - b.completed).map(todo => {
          const relativeTime = moment(todo.dateCreated).fromNow()
          const labelStyle = {};
          if (todo.completed) {
            labelStyle.textDecoration = 'line-through';
          }
          return (
            <List.Item>
              <List.Icon name='github' size='large' verticalAlign='middle' />
              <List.Content>
                <List.Header as='a' style={labelStyle}>{todo.label}</List.Header>
                {!todo.completed && <List.Description as='a'>{relativeTime}</List.Description>}
              </List.Content>
            </List.Item>
          );
        })
      }

      <List.Item>
        <List.Icon name="add" size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as="a" style={{ paddingTop: '4px' }}>Add ToDo</List.Header>
        </List.Content>
      </List.Item>

    </List>
  );
}

function App() {
  return (
    <Container>

      <Container fluid textAlign="center">
        <Input icon='tags'
          iconPosition='left'
          label={{ tag: true, content: 'Add ToDo' }}
          labelPosition='right'
          placeholder='Enter a todo...' />
      </Container>

      <TodoList />


      {/* Just for you!
      <div>
        <Button primary>Test Button</Button>
        <Button secondary>Secondary Button</Button>
      </div> */}

    </Container>
  );
}

export default App;

import React from 'react';
import Todo from './todo';

const todoList = [
  {
    task: 'Clean Dishes',
    isCompleted: true,
  },
  {
    task: 'Tidy Frontroom',
    isCompleted: false,
  },
];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: todoList,
    };
  }

  render() {
    return (
      <Todo todoList={this.state.todos} />
    );
  }
}

export default App;

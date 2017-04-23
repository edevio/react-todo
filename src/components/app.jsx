import React from 'react';
import TodoList from './todo-list';

const todos = [
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
      todos
    };
  }

  addTodo(task) {

    this.state.todos.push ({
      task,
      isCompleted: false
    });

    this.setState(
      todos
    );

  }

  editTodo(taskOld, taskNew) {
    const selectedTask = todos.find( todo => todo.task === taskOld );
    selectedTask.task = taskNew;
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        addTodo={this.addTodo.bind(this)}
        editTodo={this.editTodo.bind(this)}
      />
    );
  }
}

export default App;

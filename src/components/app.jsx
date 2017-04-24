import React from 'react';
import TodoList from './todo-list';
import shortid from 'shortid';

const todos = [
  {
    task: 'Clean Dishes',
    isCompleted: true,
    id: shortid.generate(),
  },
  {
    task: 'Tidy Frontroom',
    isCompleted: false,
    id: shortid.generate(),
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
      isCompleted: false,
      id: shortid.generate(),
    });

    this.setState(
      todos
    );
  }

  deleteTodo(taskId) {
    const taskToDeleteIndex = todos.findIndex( todo => todo.id === taskId );

    if (taskToDeleteIndex > -1){
      todos.splice(taskToDeleteIndex, 1);
    }

    this.setState({
      todos: this.state.todos
    })
  }

  editTodo(taskOld, taskNew) {
    const selectedTask = todos.find( todo => todo.task === taskOld );
    selectedTask.task = taskNew;
    this.setState({ todos: this.state.todos });
  }

  toggleTodoStatus(task) {
    const selectedTask = todos.find( todo => todo.task === task );
    selectedTask.isCompleted = !selectedTask.isCompleted;

    this.setState({
      todos: this.state.todos
    })
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        addTodo={this.addTodo.bind(this)}
        editTodo={this.editTodo.bind(this)}
        deleteTodo={this.deleteTodo.bind(this)}
        toggleTodoStatus={this.toggleTodoStatus.bind(this)}
      />
    );
  }
}

export default App;

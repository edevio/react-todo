import React from 'react';
import TodoList from './todo-list';
import shortid from 'shortid';
// import sampleContent from '../sample-todo';
import base from '../base';

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
      todos: []
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`List` ,{
        context: this,
        state: 'todos',
        asArray: true,
      });
  }

  componentDidMount() {
    this.setState ({
      todos: todos
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
    console.log(`${taskOld} ${taskNew}`);
    const selectedTask = todos.find( todo => todo.task === taskOld );
    console.log(selectedTask)
    console.log(taskNew);
    selectedTask.task = taskNew;

    this.setState({ todos: todos });
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

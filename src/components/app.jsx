import React from 'react';
import TodoList from './todo-list';
import shortid from 'shortid';
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
    }

  }

  componentWillMount() {

    base.fetch(`List`, {
      context: this,
      asArray: true
    }).then(data => {
      if (data.length > 0 ) {
        // Returned non-empty array of data
        this.setState({ todos: data });
      } else {
        // Returned empty array.
        this.setState({ todos: todos });
      }
    }
    ).catch(error => {
      //handle error
      console.log(error);
    })

    // Set-up two way sync.
    this.ref = base.syncState(`List` ,{
        context: this,
        state: 'todos',
        asArray: true,
      });

  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTodo(task) {

    if (!task) {
      return;
    }

    this.state.todos.push ({
      task,
      isCompleted: false,
      id: shortid.generate(),
    });

    this.setState({
      todos: this.state.todos
    })
  }

  deleteTodo(taskId) {
    const taskToDeleteIndex = this.state.todos.findIndex( todo => todo.id === taskId );

    if (taskToDeleteIndex > -1){
      this.state.todos.splice(taskToDeleteIndex, 1);
    }

    this.setState({
      todos: this.state.todos
    })
  }

  editTodo(taskOld, taskNew) {
    const taskOldIndex = taskOld.index;
    this.state.todos[taskOldIndex].task = taskNew;
    this.setState({ todos: this.state.todos });
  }

  toggleTodoStatus(task) {
    const selectedTask = this.state.todos.find( todo => todo.task === task );
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

import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import TodoList from './todo-list';
import base from '../base';

const defaultProps = {
  todos: [
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
  ],
};
const propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodoStatus = this.toggleTodoStatus.bind(this);

    this.state = {
      todos: [],
    };
  }

  componentWillMount() {
    base.fetch(`List`, {
      context: this,
      asArray: true,
    }).then((data) => {
      if (data.length > 0) {
        // Returned non-empty array of data
        this.setState({ todos: data });
      } else {
        // Returned empty array.
        this.setState({ todos: defaultProps.todos });
      }
    },
    ).catch((error) => {
      // handle error
    });

    // Set-up two way sync.
    this.ref = base.syncState(`List`, {
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

    this.state.todos.push({
      task,
      isCompleted: false,
      id: shortid.generate(),
    });

    this.setState({
      todos: this.state.todos,
    });
  }

  deleteTodo(taskId) {
    const taskToDeleteIndex = this.state.todos.findIndex(todo => todo.id === taskId);

    if (taskToDeleteIndex > -1) {
      this.state.todos.splice(taskToDeleteIndex, 1);
    }

    this.setState({
      todos: this.state.todos,
    });
  }

  editTodo(taskOld, taskNew) {
    const taskOldIndex = taskOld.index;
    this.state.todos[taskOldIndex].task = taskNew;
    this.setState({ todos: this.state.todos });
  }

  toggleTodoStatus(task) {
    const selectedTask = this.state.todos.find(todo => todo.task === task);
    selectedTask.isCompleted = !selectedTask.isCompleted;

    this.setState({
      todos: this.state.todos,
    });
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        addTodo={this.addTodo}
        editTodo={this.editTodo}
        deleteTodo={this.deleteTodo}
        toggleTodoStatus={this.toggleTodoStatus}
      />
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

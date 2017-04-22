import React from 'react';
import TodoListItems from './todo-list-items.jsx';

class Todo extends React.Component {

  render() {
    return (
      <ul>
        <TodoListItems
          TodoListItems={this.props.todoList}
          TestData="abc"
        />
      </ul>
    );

  }
}

export default Todo;

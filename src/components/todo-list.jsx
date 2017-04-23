import React from 'react';
import TodoListItem from './todo-list-item';
import TodoListItemAdd from './todo-add-item';
import shortid from 'shortid';

class Todo extends React.Component {

  renderTodoListItem() {
    return (
      this.props.todos.map(todoListItem => {
        return (
          <TodoListItem
            key={shortid.generate()}
            {...todoListItem}
            {...this.props}
          />
        );
      })
    );
  }

  render() {
    return (
      <div>
      <ul>
        {this.renderTodoListItem()}
      </ul>
        <TodoListItemAdd
          addTodo={this.props.addTodo}
        />
      </div>
    );
  }

}

export default Todo;

import React from 'react';
import shortid from 'shortid';

class TodoListItems extends React.Component {

  returnTodoListItem() {
    return (
      this.props.TodoListItems.map(todoListItem => {
        return (
          <li key={shortid.generate()}>
            <span>{todoListItem.task}</span>
            <a className="btn btn-primary">Delete</a>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <ul>
        {this.returnTodoListItem()}
      </ul>
    );
  }

}

export default TodoListItems;

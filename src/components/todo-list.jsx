import React from 'react';
import TodoListItem from './todo-list-item';
import TodoListItemAdd from './todo-add-item';

class Todo extends React.Component {

  renderTodoListItem() {
    return (
      this.props.todos.map(( todoListItem, index )  => {
        return (
          <TodoListItem
            key={todoListItem.id}
            index={index}
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
        <h1>Todo List</h1>
      <ul className="list-unstyled">
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

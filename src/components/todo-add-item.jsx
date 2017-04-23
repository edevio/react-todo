import React from 'react';

class TodoListItemAdd extends React.Component {

  addItem() {
    event.preventDefault();
    this.props.addTodo(this.refs.inputCreate.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref="inputCreate"/>
        <button className="btn btn-primary" onClick={this.addItem.bind(this)}>Add</button>
      </div>
    );
  }

}

export default TodoListItemAdd;

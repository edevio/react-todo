import React from 'react';
import PropTypes from 'prop-types';

class TodoListItemAdd extends React.Component {

  addItem() {
    event.preventDefault();
    this.props.addTodo(this.refs.inputCreate.value);
    this.refs.inputCreate.value = '';
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control" type="text" ref="inputCreate"/>
        <button className="btn btn-primary" onClick={this.addItem.bind(this)}>Add</button>
      </div>
    );
  }

}

export default TodoListItemAdd;

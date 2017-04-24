import React from 'react';

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  onSaveClick() {
    const taskNew = this.refs.inputEdit.value;
    const taskOld = this.props.task;
    this.props.editTodo(taskOld, taskNew);
    this.setState({ isEditing: false });
  }

  renderTaskButtons() {
    if (this.state.isEditing) {
      return (
        <div>
          <button className="btn btn-primary" onClick={this.onSaveClick.bind(this)}>Save</button>
          <button className="btn btn-danger" onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </div>
      );
    }
    return (
      <div>
        <button className="btn btn-primary" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="btn btn-danger" onClick={this.props.deleteTodo.bind(this, this.props.id)}>Delete</button>
      </div>
    );
  }

  renderTaskItem() {
    const { task, isCompleted } = this.props;


    const cssClass = isCompleted ? 'text-success' : 'text-danger';

    if (this.state.isEditing) {
      return (
        <form action="">
          <input defaultValue={task} type="text" ref="inputEdit"/>
        </form>
      );
    }
    return (
      <p className={cssClass} onClick={this.props.toggleTodoStatus.bind(this, task)} ref="inputDelete">{task}</p>
    );
  }

  render() {
    return (
      <li>
        {this.renderTaskItem()}
        {this.renderTaskButtons()}
      </li>
    );
  }

}

export default TodoListItem;

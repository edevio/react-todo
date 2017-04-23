import React from 'react';

class TodoListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  renderTaskItem() {

    const { task, isCompleted } = this.props;

    console.log(task);

    if (this.state.isEditing) {
      return (
        <form action="">
          <input defaultValue={task} type="text" ref="inputEdit"/>
        </form>
      )
    }
    else {
      return(
        <p>{task}</p>
      )
    }
  }

  renderTaskButtons() {
    if (this.state.isEditing) {
      return(
        <div>
          <button className="btn btn-primary" onClick={this.onSaveClick.bind(this)}>Save</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      )
    }
    else {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    )
    }
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onSaveClick() {
    const taskNew = this.refs.inputEdit.value;
    const taskOld = this.props.task;

    this.props.editTodo(taskOld, taskNew);

    this.setState({ isEditing: false });

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

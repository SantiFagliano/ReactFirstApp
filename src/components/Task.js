import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  styleCompleted() {
    return {
      fontSize: "20px",
      color: this.props.task.done ? "gray" : "#000",
      textDecoration: this.props.task.done ? "line-through" : "none",
    };
  }

  render() {
    const { task } = this.props;

    return (
      <ul>
        <li style={this.styleCompleted()}>
          {task.title} -{task.description} -{task.done} -{task.id}
          <input
            type="checkbox"
            className="form-check-input m-2"
            onChange={this.props.checkDone.bind(this, task.id)}
          />
          <button
            className="btn btn-primary"
            style={btnDelete}
            onClick={this.props.deleteTask.bind(this, task.id)}
          >
            x
          </button>
        </li>
      </ul>
    );
  }
}
Task.propTypes = {
  task: PropTypes.object.isRequired,
};
const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "50%",
  cursor: "pointer",
};
export default Task;

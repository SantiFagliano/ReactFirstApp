import React, { Component } from "react";

import "./Task.css";

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
      <div>
        <p style={this.styleCompleted()}>
          {task.title} -{task.description} -{task.done} -{task.id}
          <input type="checkbox" className="form-check-input m-2"></input>
          <button className="btn btn-primary" style={btnDelete}>
            x
          </button>
        </p>
      </div>
    );
  }
}

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

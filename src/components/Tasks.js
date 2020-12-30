import React, { Component } from "react";
class Tasks extends Component {
  render() {
    return this.props.tasks.map((e) => (
      <p key={e.id}>
        {e.title} - {e.description} - {e.done} - {e.id}
        <input type="checkbox" className="form-check-input m-2"></input>
        <button className="btn btn-primary">x</button>
      </p>
    ));
  }
}
export default Tasks;

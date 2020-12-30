import React, { Component } from "react";
import "./App.css";

import tasks from "./sample/tasks.json";

import Tasks from "./components/Tasks";

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div className="container p-2 bg-secondary">
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

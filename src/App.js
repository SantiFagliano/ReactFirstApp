import React, { Component } from "react";
import "./App.css";

import tasks from "./sample/tasks.json";

//Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

class App extends Component {
  state = {
    tasks: tasks,
  };

  render() {
    return (
      <div className="container-fluid p-2 ">
        <TaskForm />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

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
  addTask = (title, description) => {
    const newTask={
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
  };
  render() {
    return (
      <div className="container-fluid p-2 ">
        <TaskForm addTask={this.addTask} />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

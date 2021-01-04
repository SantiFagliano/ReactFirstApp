import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

import tasks from "./sample/tasks.json";

//Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <Router>
        <div className="container p-2 ">
          <div>
            <Link to="/">Task</Link>
            <br />
            <Link to="/posts">Post</Link>
          </div>
          <h2>Bienvenido a mi primera pagina con React</h2>
          <hr />

          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <div>
                    <TaskForm addTask={this.addTask} />
                  </div>
                  <div className="p-4">
                    <h4 className="text-success">Lista de tareas</h4>
                    <Tasks
                      tasks={this.state.tasks}
                      deleteTask={this.deleteTask}
                      checkDone={this.checkDone}
                    />
                  </div>
                </div>
              );
            }}
          ></Route>
          <Route
            exact
            path="/posts"
            render={() => {
              return (
                <div className="p-4">
                  <Posts />
                </div>
              );
            }}
          ></Route>
        </div>
      </Router>
    );
  }
}

export default App;

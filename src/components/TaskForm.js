import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        title:'',
        description:''
    }
    
    onSubmit = e => {
        console.log(this.state);
        e.preventDefault();
    };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    };
    render() {
        return (
        <form onSubmit={this.onSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Write a task"
                className="form-control"
                onChange={this.onChange}
                value={this.state.title}
            />
            <br />
            <textarea
                name="description"
                placeholder="escriba una descripcion"
                className="form-control"
                onChange={this.onChange}
                value={this.state.description}
            ></textarea>
            <br />
            <input
                type="submit"
                className="btn btn-primary"
                value="Submit!"
            />
        </form>
        );
    }
}

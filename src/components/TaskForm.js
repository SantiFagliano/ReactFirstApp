import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        title:'',
        description:''
    }
    
    onSubmit = e => {
        this.props.addTask(this.state.title,this.state.description);
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
            <h3 className="text-center text-primary">Agrege una nueva tarea!</h3>
            <input
                type="text"
                name="title"
                placeholder="Esccriba una tarea"
                className="form-control border-primary"
                onChange={this.onChange}
                value={this.state.title}
            />
            <br />
            <textarea
                name="description"
                placeholder="Escriba una descripcion"
                className="form-control border-primary"
                onChange={this.onChange}
                value={this.state.description}
            ></textarea>
            <br />
            <input
                type="submit"
                className="btn btn-outline-primary"
                value="Crear Nueva Tarea!"
            />
        </form>
        );
    }
}

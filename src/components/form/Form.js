import React, { Component } from 'react';
import './Form.css';
import Input from '../Input/Input';
import Todolist from '../Todolist/Todolist';



class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [{ id: 1, completed: false, title: 'Task 1' },
            { id: 2, completed: false, title: 'Task 2' },
            { id: 3, completed: true, title: 'Task 3' },
            { id: 4, completed: false, title: 'Task 4' },
            { id: 5, completed: false, title: 'Task 5' }],
            input: '',
        }

    }
    DeleteitemToDo = (id) => {
        const filterstate = this.state.todoList.filter(item => item.id !== id)
        this.setState({ todoList: filterstate })
    }
    ToggleToDo = function (id) {
        const newstate = this.state.todoList.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        this.setState({ todoList: newstate })
    }

    Input = (e) => {
        this.setState({ input: e.target.value })
    }
    addToDo = (e) => {
        e.preventDefault();
        if (this.state.input.trim()) {
            let newTask = { id: Date.now(), completed: false, title: this.state.input };
            let copy = [...this.state.todoList, newTask];
            this.setState({ todoList: copy })
            this.setState({ input: '' })
        }

    }
    render() {
        return (<div className='contaner'>
            <div className='Form col-sm-12'> To Do List</div>

            <Input inputChange={this.Input} addToDo={this.addToDo} inputvalue={this.state.input} />
            < Todolist todoList={this.state.todoList} onToggle={this.ToggleToDo.bind(this)} Del={this.DeleteitemToDo} />


        </div>

        )
    }
}

export default Form;

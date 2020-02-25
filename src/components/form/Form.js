import React, { Component } from 'react';
import './Form.css';
import Input from '../Input/Input';
import Todolist from '../Todolist/Todolist';
import ContextToDo from '../Context';

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
    ToggleToDo = (id) => {
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
        const input = this.state.input;
        const todoList = this.state.todoList;
        return (<div className='contaner'>
            <div className='Form col-sm-12'> To Do List</div>
            <ContextToDo.Provider value={{ todoList, input, addToDo: this.addToDo, Input: this.Input, ToggleToDo: this.ToggleToDo, DeleteitemToDo: this.DeleteitemToDo }}>
                <Input />
                < Todolist />
            </ContextToDo.Provider>

        </div>

        )
    }
}

export default Form;

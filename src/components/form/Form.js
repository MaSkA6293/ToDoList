import React, { useState, useEffect } from 'react';
import './Form.css';
import Input from '../Input/Input';
import Todolist from '../Todolist/Todolist';
import ContextToDo from '../Context';
import Loader from '../Loader/Loader';
const Form = () => {
    const [todoList, setTodoList] = useState([]);
    const [Loading, setLoading] = useState(true);
    // [{ id: 1, completed: false, title: 'Task 1' },
    // { id: 2, completed: false, title: 'Task 2' },
    // { id: 3, completed: true, title: 'Task 3' },
    // { id: 4, completed: false, title: 'Task 4' },
    // { id: 5, completed: false, title: 'Task 5' }]

    const [input, setinput] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_page=7&_limit=10')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setTodoList(json);
                    setLoading(false)
                }
                    , 3000)

            })
    }, [])

    const DeleteitemToDo = (id) => {
        const filterstate = todoList.filter(item => item.id !== id)
        setTodoList(filterstate)
    }
    const ToggleToDo = (id) => {
        const newstate = todoList.map(item => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        setTodoList(newstate)
    }

    const Inputval = ({ target }) => {
        setinput(target.value)
    }
    const addToDo = (e) => {
        e.preventDefault();
        if (input.trim()) {
            let newTask = { id: Date.now(), completed: false, title: input };
            let copy = [...todoList, newTask];
            setTodoList(copy);
            setinput('')
        }
    }

    return (<div className='contaner'>
        <div className='Form col-sm-12'> To Do List</div>
        <ContextToDo.Provider value={{ todoList, input, Loading, addToDo: addToDo, Input: Inputval, ToggleToDo: ToggleToDo, DeleteitemToDo: DeleteitemToDo }}>
            <Input />
            {Loading && <Loader />}
            < Todolist />
        </ContextToDo.Provider>
    </div>
    )
}

export default Form;

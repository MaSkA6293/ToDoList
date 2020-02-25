import React, { Component } from 'react';
import './Todolist.css';
import Todoitem from '../Todolist/Todoitem/Todoitem'
import ContextToDo from '../Context';
class Todolist extends Component {

    static contextType = ContextToDo;

    HandlerCheckBox = (e) => {
        e.target.classList.add('done');
    }
    render() {
        const { todoList } = this.context;
        return (<div className='task col-sm-8'>

            <ul className="list-group">
                {(todoList.length > 0) ?
                    (todoList.map((todo, index) => {
                        return (
                            <Todoitem key={todo.id} todo={todo} index={index} />
                        )
                    })
                    ) : (<div className="endwork ol-sm-8">Add New Task!!!</div>)}

            </ul>


        </div>
        )
    }
}



export default Todolist;

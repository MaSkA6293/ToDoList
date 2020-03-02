import React, { useContext } from 'react';
import './Todolist.css';
import Todoitem from '../Todolist/Todoitem/Todoitem'
import ContextToDo from '../Context';

const Todolist = () => {

    const contextType = useContext(ContextToDo);

    const { todoList } = contextType;

    return (<div className='task col-sm-8'>

        <ul className="list-group">
            {
                todoList.map((todo, index) => {
                    return (
                        <Todoitem key={todo.id} todo={todo} index={index} />
                    )
                })

            }

        </ul>


    </div>
    )

}



export default Todolist;

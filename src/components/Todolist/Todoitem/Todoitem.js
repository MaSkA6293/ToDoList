import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import ContextToDo from '../../Context';
const styles = {
    input: {
        marginRight: '1rem'
    },
    btn: {
        float: 'right'
    },
    index: {
        marginRight: '10px',
    }
}

const Todoitem = ({ todo, index }) => {
    const contextType = useContext(ContextToDo);


    const { DeleteitemToDo, ToggleToDo } = contextType;

    return (
        <li className="list-group-item">
            <span className={(todo.completed) ? 'finish' : ''} >
                <input type='checkbox' checked={todo.completed} className="checkbox" onChange={() => ToggleToDo(todo.id)} style={styles.input} />
                <strong style={styles.index}>{index + 1}</strong>
                {todo.title}
                <button style={styles.btn} className='btn btn-danger' onClick={() => DeleteitemToDo(todo.id)}>Удалить</button>
            </span>
        </li>)

}

Todoitem.propTypes = {
    todo: PropTypes.shape({
        completed: PropTypes.bool,
        id: PropTypes.number,
        title: PropTypes.string
    }),
    index: PropTypes.number,
}


export default Todoitem;
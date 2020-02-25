import React, { Component } from 'react'
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

class Todoitem extends Component {
    static contextType = ContextToDo;

    render() {
        const { DeleteitemToDo, ToggleToDo } = this.context;

        return (
            <li className="list-group-item">
                <span className={(this.props.todo.completed) ? 'finish' : ''} >
                    <input type='checkbox' checked={this.props.todo.completed} className="checkbox" onChange={() => ToggleToDo(this.props.todo.id)} style={styles.input} />
                    <strong style={styles.index}>{this.props.index + 1}</strong>
                    {this.props.todo.title}
                    <button style={styles.btn} className='btn btn-danger' onClick={() => DeleteitemToDo(this.props.todo.id)}>Удалить</button>
                </span>
            </li>)
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,

}

export default Todoitem;
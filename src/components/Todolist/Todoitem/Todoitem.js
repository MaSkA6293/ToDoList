import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
    render() {
        return (
            <li className="list-group-item">
                <span className={(this.props.todo.completed) ? 'finish' : ''} >
                    <input type='checkbox' checked={this.props.todo.completed} className="checkbox" onChange={() => this.props.Change(this.props.todo.id)} style={styles.input} />
                    <strong style={styles.index}>{this.props.index + 1}</strong>
                    {this.props.todo.title}
                    <button style={styles.btn} className='btn btn-danger' onClick={() => this.props.deleteItem(this.props.todo.id)}>Удалить</button>
                </span>
            </li>)
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    Change: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Todoitem;
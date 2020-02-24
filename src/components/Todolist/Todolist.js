import React, { Component } from 'react';
import './Todolist.css';
import PropTypes from 'prop-types';
import Todoitem from '../Todolist/Todoitem/Todoitem'
class Todolist extends Component {


    HandlerCheckBox = (e) => {
        e.target.classList.add('done');
    }
    render() {
        return (<div className='task col-sm-8'>

            <ul className="list-group">
                {this.props.todoList.map((todo, index) => {
                    return (
                        <Todoitem key={todo.id} todo={todo} index={index} Change={this.props.onToggle} deleteItem={this.props.Del} />
                    )
                })}
            </ul>


        </div>
        )
    }
}

Todolist.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
    Del: PropTypes.func.isRequired
}

export default Todolist;

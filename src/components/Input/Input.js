import React, { useContext } from 'react';
import './Input.css';
import ContextToDo from '../Context';
import PropTypes from 'prop-types';

const Input = () => {

    const contextType = useContext(ContextToDo);

    const { addToDo, input, Input } = contextType;

    return (<div className='input col-sm-8'>
        <form onSubmit={(e) => addToDo(e)}>
            <div className='col-sm-12 paddingDel' >
                <input type="text" className="form-control" placeholder="Новая задача" value={input} onChange={(e) => Input(e)}></input>
            </div>
            <div className='col-sm-12 blockBtnadd paddingDel'>
                <button className='btn btn-success buttonAdd '> Add to do!</button>
            </div>
        </form>
    </div >
    )
}
Input.propTypes = {
    addToDo: PropTypes.func,
    input: PropTypes.string,
    Input: PropTypes.func,
}

export default Input;

import React, { Component } from 'react';
import './Input.css';
import ContextToDo from '../Context';
class Input extends Component {
    static contextType = ContextToDo;
    render() {

        const { addToDo, input, Input } = this.context;


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
}

export default Input;

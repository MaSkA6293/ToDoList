import React, { Component } from 'react';
import './Input.css';
import PropTypes, { string } from 'prop-types';
class Input extends Component {
    render() {
        return (<div className='input col-sm-8'>
            <form onSubmit={(e) => this.props.addToDo(e)}>
                <div className='col-sm-12 paddingDel' >
                    <input type="text" className="form-control" placeholder="Новая задача" value={this.props.inputvalue} onChange={(e) => this.props.inputChange(e)}></input>
                </div>
                <div className='col-sm-12 blockBtnadd paddingDel'>
                    <button className='btn btn-success buttonAdd '> Add to do!</button>
                </div>

            </form>
        </div >
        )
    }
}

Input.propTypes = {
    inputvalue: string,
    inputChange: PropTypes.func.isRequired,
}
export default Input;

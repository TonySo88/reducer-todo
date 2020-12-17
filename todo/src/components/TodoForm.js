import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer'

const TodoForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                type="text"
                name="todo"
                value={props.newTodo}
                onChange={props.handleChanges}
            />
            <button>Add Your Todo!</button>
        </form>
    )
}

export default TodoForm;
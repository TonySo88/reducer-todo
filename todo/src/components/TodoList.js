import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.state.map(obj => {
                return <Todo toggleTodo={props.toggleTodo} key={obj.id} todo={obj}/>
            })}
            <button onClick={props.clearCompleted}>Clear</button>
        </div>
    )
}

export default TodoList;
import logo from './logo.svg';
import './App.css';
import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  const [newTodo, setNewTodo] = useState('')

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
      setNewTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({ type: 'ADD_TODO', payload: newTodo})
  }

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id})
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <TodoForm newTodo={newTodo} dispatch={dispatch} handleChanges={handleChanges} handleSubmit={handleSubmit}/>
      <TodoList toggleTodo={toggleTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;

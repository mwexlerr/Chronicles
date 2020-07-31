//import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
//import './App.css';

import React, { useState, useEffect } from "react"
import "./App.css"
import APIHelper from "./APIHelper.js"

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  /*const foo = useState("");
  const todo = foo[0];
  const setTodo = foo[1];*/
  //function foo() {
  const foo = () => {
    console.log('calling foo')
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos()
      setTodos(todos)
    }

    fetchTodoAndSetTodos()
  }


  useEffect(() => {
    foo()
  }, [])

  //useEffect(foo, [])
  const createTodo = async e => {
    e.preventDefault()
    if (!todo) {
      alert("please enter something")
      return
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`)
      return
    }
    const newTodo = await APIHelper.createTodo(todo)
    const updatedTodos = [...todos]; //makes a copy of todos so you arent mutating todos.
    updatedTodos.push(newTodo);
    setTodos(updatedTodos)
    //setTodos([...todos, newTodo])
  }

  const deleteTodo = async (e, id) => {
    console.log('deleting:', id);
    try {
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      setTodos(todos.filter(({ _id: i }) => id !== i))
    } catch (err) {}
  }

  const updateTodo = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !todos.find(todo => todo._id === id).completed,
    }
    const updatedTodo = await APIHelper.updateTodo(id, payload)
    setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)))
  }

  return (
    <div className="App">
      <div>
        <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
        <button type="button" onClick={createTodo}>
          Add
        </button>
      </div>

      <ul>
        {todos.map(({ _id, task, completed }, i) => (
          <li
            key={i}
            onClick={e => updateTodo(e, _id)}
            className={completed ? "completed" : ""}
          >
            {task} <span onClick={e => deleteTodo(e, _id)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

/*export default function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React!
          </a>
        </header>

      

        <p>
          Love you Steveo :p
        </p>
      </div>



    );
  }*/


  
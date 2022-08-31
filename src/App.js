import React from 'react';
import './App.css';

import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("")
  console.log(todos)
  return (


    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {Date(Date.now()).slice(0,10) } 🌝 ☕</h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([{ id:Date.now(), status: false, text: todo }, ...todos])} className="fas fa-plus"></i>
      </div>
      {todos.map((curr) => {
        if (!curr.status) {
          return (
            <div key={curr.id} className="todos">
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setTodos(todos.filter((obj) => {
                        if (obj.id === curr.id) {
                          curr.status = e.target.checked
                        }
                        return obj
                      }))
                    }}  type="checkbox" name="" id="" />
                  <p >{curr.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={(e) => {
                      setTodos(todos.filter((obj) => {
                        if (obj.id !== curr.id) {
                          return obj
                        }
                        return null
                      }))
                    }} ></i>
                </div>
              </div>
            </div>)
        }
       return null
      })}
      {todos.map((curr) => {
        if (curr.status) {
          return (
            <div key={curr.id} className="todos">
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setTodos(todos.filter((obj) => {
                        if (obj.id === curr.id) {
                          curr.status = e.target.checked
                        }
                        return obj
                      }))
                    }}  type="checkbox" name="" id="" checked/>
                  <p className='cross'>{curr.text}</p>
                </div>
                <div className="right">
                  <i 
                  onClick={(e) => {
                    setTodos(todos.filter((obj) => {
                      if (obj.id !== curr.id) {
                        return obj
                      }
                      return null
                    }))
                  }} 
                  className="fas fa-times"></i>
                </div>
              </div>
            </div>)
        }
        return null
      }
      )}
    </div>
  );
}

export default App;
import React from 'react'
import TodoList from '../TodoList/TodoList'
import "./TodoLayout.css"

function TodoLayout() {
  return (
    <div className="todoContainer">
        <h3>Todo приложение</h3>
        <TodoList/>
    </div>
  )
}

export default TodoLayout
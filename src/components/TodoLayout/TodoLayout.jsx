import React from 'react'
import TodoList from '../TodoList/TodoList'
import styles from "./TodoLayout.module.less"

function TodoLayout() {
  return (
    <div className={styles.todoContainer}>
        <h3>Todo приложение</h3>
        <TodoList/>
    </div>
  )
}

export default TodoLayout
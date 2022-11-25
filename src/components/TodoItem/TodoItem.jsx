import styles from "./TodoItem.module.css"
import React from 'react'
import DayJS from 'react-dayjs';
function TodoItem({todo, date, dateForCheck, toggleCompleted, deleteTodo}) {
    
  return (
    <li className={styles.li}>
    <h4>{todo.title}</h4>
      <div className={styles.todoItem}>
        
        <div className={!todo.completed? `${styles.descContainer}` : `${styles.descContainer} ${styles.completed}` }>
            <p> <span>Описание задачи:</span> {todo.description}</p>
            <p> <span>Завершить до:</span><DayJS format="DD-MM-YY / HH:mm:ss">{date}</DayJS> </p>
            <p> <span>id:</span> {todo.id}</p>
            {new Date() > dateForCheck? <div>Не успел выполнить вовремя, эх ты...</div>: ""}
            
             <p> <span> ссылки к файлам:</span> {todo.attachedFiles.length===0 ?"нет файлов" : todo.attachedFiles.map((link,index) => <a key={index} href={link}>link</a>)} </p> 
          </div>

          <div className={styles.udContainer}>
          
          <input onChange={()=>toggleCompleted(todo)} checked={todo.completed? "checked" : ""} type="checkbox"></input>
          <button onClick={()=>deleteTodo(todo.id)}>Удалить задачу</button>
          </div>


      </div>
    </li>
  )
}

export default TodoItem
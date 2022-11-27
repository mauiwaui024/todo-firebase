import  "./TodoItem.css"
import React from 'react'
import DayJS from 'react-dayjs';
function TodoItem({todo, date, dateForCheck, toggleCompleted, deleteTodo}) {
    
  return (
    
    
      <div className={!todo.completed? "todoItem" : "todoItem completed" }>
      
        <div className="descContainer">
             <p><span>Название задачи:</span> {todo.title}</p>
            <p> <span>Описание задачи:</span> {todo.description}</p>
            <p> <span>Завершить до:</span> <DayJS format="DD-MM-YY / HH:mm:ss">{date}</DayJS> </p>
            {/* <p> <span>id:</span> {todo.id}</p> */}
             <p> <span> Cсылки к файлам:</span> {todo.attachedFiles.length===0 ?"нет файлов" : todo.attachedFiles.map((link,index) => <a key={index} href={link}>Ссылка на файл {index + 1}, </a>)} </p> 
             {new Date() > dateForCheck? <div>Задача не была выполнена в срок...ну ничего, в следующий раз будешь продуктивнее</div>: ""}
          </div>

          <div className="udContainer">
            <div>
            <label for="checkbox">Отметить задачу завершенной: </label>
            <input id="checkbox" onChange={()=>toggleCompleted(todo)} checked={todo.completed? "checked" : ""} type="checkbox"></input>
            </div>
          <button onClick={()=>deleteTodo(todo.id)}>Удалить задачу</button>
          </div>


      </div>
    
  )
}

export default TodoItem
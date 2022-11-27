import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import {db} from "../../firebase"
import { Timestamp } from 'firebase/firestore';
import  "./TodoForm.css"


function TodoForm() {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState("")

  //форматируем дату в date object
  let formatted = new Date(date)
  //конвертируем в секунды и миллисекунды для базы данных
  let dateForDb = Timestamp.fromDate(formatted)

  //добавляем запись в туду
  const addTodo = async(e) =>{
    e.preventDefault()
    if(title===""| desc === "" | date === ""){
      alert ("Введите данные во все инпуты")
      return
    }
    await addDoc(collection(db, "todos"),{
      title: title,
      completed: false,
      description: desc,
      completeBefore: dateForDb,
      attachedFiles: []
    })
  }
  

  return (
    <div className="formContainer">
    <form onSubmit={addTodo} className="myForm">
      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='введите название задачи'/>
      <input value={desc} onChange={(e)=>setDesc(e.target.value)}  type="text" placeholder='введите описание задачи'/>
      <label for="time">Выполнить до:</label>
      <input id="#time" value={date} onChange={(e)=>setDate(e.target.value)} type="datetime-local" />
      {/* <input value={time} onChange={(e)=>setTime(e.target.value)} type="time" /> */}
      <button className="red">ДОБАВИТЬ TODO</button>
    </form>
    </div>
  )
}

export default TodoForm
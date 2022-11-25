import React, { useState } from 'react'
import styles from "./TodoForm.module.css"
import { collection, addDoc } from 'firebase/firestore'
import {db} from "../../firebase"
import { Timestamp } from 'firebase/firestore';

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
    await addDoc(collection(db, "todos"),{
      title: title,
      completed: false,
      description: desc,
      completeBefore: dateForDb,
      attachedFiles: []
    })
  }
  

  return (
    <form onSubmit={addTodo} className={styles.myform}>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='введите название задачи'/>
      <input value={desc} onChange={(e)=>setDesc(e.target.value)}  type="text" placeholder='введите описание задачи'/>
      <input value={date} onChange={(e)=>setDate(e.target.value)} type="datetime-local" />
      {/* <input value={time} onChange={(e)=>setTime(e.target.value)} type="time" /> */}
      <button>добавить todo</button>
    </form>
  )
}

export default TodoForm
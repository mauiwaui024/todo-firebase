import React,{useEffect, useState} from 'react'
import {db, storage} from "../../firebase"
import { collection,  query, onSnapshot,  updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { ref, listAll, deleteObject,   } from 'firebase/storage'; 
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import FileForm from '../FileForm/FileForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

  //фетчим дату и ее изменения из базы данных
    const fetchTodos = ()=>{
      const q = query(collection(db, "todos"))
      const unsub =  onSnapshot(q, (QuerySnapshot)=>{
        let todosArray = []
        QuerySnapshot.forEach((doc)=>{
                  todosArray.push({...doc.data(), id: doc.id})
                console.log(todosArray);
              })
              setTodos(todosArray)
      })
      return unsub
    }

    //изменяем значение completed
      const toggleCompleted = async (todo) =>{
        await updateDoc(doc(db, "todos", todo.id),{
          completed: !todo.completed
        })
      }

      //Удаляем todo по айди и все файлы, связанные с этой задачей из базы данных,
        const deleteTodo = async(id) =>{
         await deleteDoc(doc(db, "todos", id))
          
        listAll(ref(storage, id)).then((response)=>{
          response.items.forEach((fileItem)=>{
           deleteObject(fileItem)
          })
        })

      }
       
    
    useEffect(()=>{
       fetchTodos()
       console.log();
    },[])

  return (
    <div> 
    <TodoForm />
    {todos.map((item)=>{
      const dateForCheck = item.completeBefore.toDate()
      const date = item.completeBefore.toDate().toString()
      return <>
            <li key={item.id}>
          <TodoItem todo={item} date={date} dateForCheck={dateForCheck} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
          <FileForm todo = {item} />
            </li>
            </>
        })}
    
        
    </div>
  )
}

export default TodoList


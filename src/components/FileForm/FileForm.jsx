import React, {useState} from 'react'
import { storage, db } from '../../firebase';
import { ref, uploadBytes, listAll, getDownloadURL,  } from 'firebase/storage'; 
import { updateDoc, doc, arrayUnion } from 'firebase/firestore'
function FileForm({todo}) {
    const [file, setFile] = useState(null)
    const [filesList, setFilesList] = useState([])
    //
    
    const todoFilesListRef = ref(storage, todo.id)

    // console.log(todoFilesListRef.fullPath);
    const uploadFile = ()=>{
        if(file === null) return;
        const fileRef = ref(storage, todo.id + "/" + file.name);
        console.log(todo.id);
        uploadBytes(fileRef, file).then(()=>{
            alert("Файл загружен")
            listAll(todoFilesListRef).then((response)=>{
              response.items.forEach((fileItem)=>{
                getDownloadURL(fileItem).then((url)=>{
                    setFilesList((previous)=>[...previous, url])
                     updateDoc(doc(db, "todos", todoFilesListRef.fullPath),{
                        attachedFiles: arrayUnion(url)
                    })
                })
              })
            })
        })
      }
  
  return (
    <div>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file"/>
        <button onClick={uploadFile}>Загрузить файл</button>
    </div>
  )
}

export default FileForm
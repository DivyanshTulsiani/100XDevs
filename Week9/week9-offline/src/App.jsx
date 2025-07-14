import { PostComponent } from './post'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'





function App(){

  const [Todo,setTodo] = useState(0)

  const [TodoD,setTodoD] = useState(1)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/' + Todo)
    .then(async res => {
      const json = await res.json()
      setTodoD(json)
    });
  },[Todo])


  return(
    <div>
      <button onClick = {()=>{
        setTodo(1)
      }}>Todo 1</button>
      <button onClick = {()=>{
        setTodo(2)
      }}>Todo 2</button>
      <button onClick = {()=>{
        setTodo(3)
      }}>Todo 3</button>
      <button onClick = {()=>{
        setTodo(4)
      }}>Todo 4</button>
      {TodoD.title}

    </div>


  )
}

export default App
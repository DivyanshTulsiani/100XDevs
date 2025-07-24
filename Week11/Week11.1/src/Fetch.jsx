import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {usePostTitle} from './hooks/useFetch.js'


//how can we get things from the backend?
//like the old wy of using fetch but with useState and useEffect now
//now this all logic can be taken under a custom hook making our code
//reusable and clean
// function App(){
//   const [post, setPost] = useState({})
//   async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const post = await response.json()
//     setPost(post)    
//   }
//   useEffect(()=>{
//     getPosts()
//   },[])
//   return(
//     <div>
//       {post.title}
//     </div>
//   )
// }

function App(){

  const title = usePostTitle()

  return(
    <div>
      {title}
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useFetch} from './hooks/useFetch'
import {usePrev} from './hooks/usePrev'



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

// function App(){

//   const title = usePostTitle()

//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

// function App(){
//   const [postNo,setPostNo] = useState(1)
//   const { loading, finalData } = useFetch("https://jsonplaceholder.typicode.com/posts/" + postNo)
//   return(
//     <div>
//       <button onClick={()=>setPostNo(1)}>1</button>
//       <button onClick={()=>setPostNo(2)}>2</button>
//       <button onClick={()=>setPostNo(3)}>3</button>

//       {loading ? 'loading....' : JSON.stringify(finalData)}
//     </div>
//   )
// }

//use prev hook basically helps us store the prevous value as the name suggests or say the prevois rerender 
//it may be helpful further

const App = () => {
  const [count,setCount] = useState(0)
  const previous = usePrev(count)

  const inc = () => {
    setCount(c => c+1)
    // usePrev(count)
  }
  console.log({previous})
  return(
    <div>
      <button onClick={inc}>{count}</button>
      <div>The previous value was {previous}</div>

    </div>
  )
  

}

export default App

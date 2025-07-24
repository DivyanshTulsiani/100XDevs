import { useEffect,useState } from 'react'


//custom hook
export function usePostTitle(){
  const [post, setPost] = useState({})
  async function getPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const post = await response.json()
    setPost(post)    
  }
  useEffect(()=>{
    getPosts()
  },[])
  return post.title
}
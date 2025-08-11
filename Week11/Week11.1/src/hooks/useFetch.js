import { useEffect,useState } from 'react'


// //custom hook
// export function usePostTitle(){
//   const [post, setPost] = useState({})
//   async function getPosts(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const post = await response.json()
//     setPost(post)    
//   }
//   useEffect(()=>{
//     getPosts()
//   },[])
//   return post.title
// }

//now lets create a more generic function thats takes a url instead ofg hardcoding

export function useFetch(url){
  const [finalData,setFinalData] = useState({})
  const [loading,setLoading] = useState(false)
  console.log(url)

  async function getDetails(){
    setLoading(true)
    const response = await fetch(url)
    const json = await response.json()
    setLoading(false)
    console.log(json)
    setFinalData(json)
  }

  useEffect(()=>{
    getDetails()
  },[url])

  //clearing the intervaal should also be implemented
  useEffect(()=>{
    setInterval(getDetails, 10*1000)
  },[])
  return{
    finalData,
    loading
  }
  
}
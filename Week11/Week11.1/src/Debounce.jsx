import {useState,useEffect,useRef} from 'react'


//useDebounce hook is a hook that we use to avoid calling external api or exp opn
//again and again like searching smthg we should until the user has typed all of it to 
//save from exp opn 


// const useDebounce = (OrignalFn) => {
//   const currentClock = useRef()
//   const fn = ()=> {
//     clearTimeout(currentClock.current)
//     currentClock.current =  setTimeout(OrignalFn,200)
//   }
//   return fn
// } 


// const App = () =>{

//   function sendToBackend(){
//     fetch("api.amazon.com/search/")
//   }

//   const debouncedFn  = useDebounce(sendToBackend)

//   return(
//     <div>
//       <input type='text' onChange={debouncedFn}></input>
//     </div>
//   )
// }

const useDebounce = (inputValue,delay) =>{
  const [debouncedValue,setDebouncedValue] = useState(inputValue)

  useEffect(()=>{
    const handler = setTimeout(()=>{
      setDebouncedValue(inputValue)
    },delay)

    return () => {
      clearTimeout(handler)
    }
      

  },[inputValue,delay])

  return debouncedValue;

}

const App = () =>{
  const [inputValue,setValue] = useState("")
  const debouncedValue = useDebounce(inputValue,200)

  

  function change(e){
    setValue(e.target.value)
  }

  useEffect(()=>{
    console.log("Exp opn done")
  },[debouncedValue])
  return(

    <div>
      <input type='text' onChange={change}></input>
    </div>
  )
}
export default App
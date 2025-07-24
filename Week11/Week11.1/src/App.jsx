import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//so what we did we created this custom hook that basically makes a counter
//and used this hook in a separate component called counter which uses this 
//to connect a button t our counter but this underlying logic can be used in many mort
//compionets where we might need this counter logic so it is also helping us
//in modularising our code avoiding repitition and bring convenience
//basically like function encapsulates our code this also does the same
function useCounter(){
  const [count,setCount] = useState(0)

  function increaseCount(){
    setCount(c => c + 1)
  }
  return {
    count: count,
    increaseCount: increaseCount
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter/>
     <Counter2/>
     <Counter2/> 
    </div>
  )
}

function Counter(){
  const {count,increaseCount} = useCounter();

  return(
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

function Counter2(){
  const {count,increaseCount} = useCounter();

  return(
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App

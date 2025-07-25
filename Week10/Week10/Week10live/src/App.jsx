import { useState } from 'react'
import { useRef } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useNavigate, redirect} from "react-router-dom";



function App() {

    const [count,SetCount] = useState(0)

    //now we see the problem we can start the clock but we need a variable
    //to store that clock so we can clear it from the console
    //basically ref allows us to create a variable whose value even if we change does not rerender
    //it persists across rerenders means if not chnaged it does not get reassigned\
    //like say a normal let variable

    //to store the value it stopped at 

    
    // let timer = 0
    //this wont work as everytime the count cahnges and it is a state var the
    //comp app rerenders which makes timer = 0 again

    //so lets use an state var
    //this would work but since this is now a state var
    //it would rerender when the timer is set
    //so this inc 1 rerender 
    // const [timer,SetTimer] = useState(0)

    //here comes useRef it allows us to give ref a var
    //but when the var changes it does not rerender

    const timer = useRef();

    function StartClock(){  
        timer.current = setInterval(()=>{
        SetCount(count => count + 1)
      },1000)

    }

    function StopClock(){
      clearInterval(timer.current)
    }

    return(
      <div>
        {count}
        <button onClick={StartClock}>Start</button>
        <button onClick={StopClock}>Stop</button>
      </div>
    )
}

export default App

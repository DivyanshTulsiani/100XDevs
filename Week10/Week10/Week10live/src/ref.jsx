import { useState } from 'react'
import { useRef } from 'react'  
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useNavigate, redirect} from "react-router-dom";


//useref 
//it lets creaetg a reference to value or a dom like below
//but we can create a ref with useState for a state variable but if we chabge
//a state var then the whole component rerenders which we might not want in
//many cases

//but we can bypass that too by creating a normal var so whats the issue
//on next page

function App() {
    const inputRef = useRef();
    const [value, setValue] = useState()

    function focusOninput(){
        inputRef.current.focus();
    }
    return(
        <div>
            Sign up
            <input ref={inputRef} type={'text'} />
            <input type={'text'}/>
            <button onClick={focusOninput}>Submit</button>
        </div>
    )
}

export default App

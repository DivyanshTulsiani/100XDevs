import { PostComponent } from './post'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'




function App(){

  const[currentTab, setcurrrentTab] = useState("feed")

  useEffect(()=>{
    console.log("Senc backend request for ",currentTab)
  },[currentTab])

  const [showTimer, setShowTimer] = useState(true);
  useEffect(()=>{
    setInterval(()=>{
      console.log("Inside clock 2")
      setShowTimer(currentValue => !currentValue)
    },5000)
  },[])


  return(
    <div>
      {showTimer && <Timer/>}
      <div>
        hj
      </div>
    </div>

)
}




const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Inside clock 1")
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return <div>{seconds} seconds elapsed</div>;
};



export default App
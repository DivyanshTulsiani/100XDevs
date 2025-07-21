import { useState,createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const BulbContext = createContext();

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LightBulb/>
    </div>
  )
}

function LightBulb(){
  const [BulbOn,SetBulbOn] = useState(true)
    return(
      <div>
        <BulbState BulbOn = {BulbOn} />
        <ToggleBulbState BulbOn={BulbOn} SetBulbOn={SetBulbOn} />
      </div>
    )
}

function BulbState({BulbOn}){

  return(
    <div>
      { BulbOn ? 'BulbOn' : 'BulbOff'}
    </div>
    
  )
}

function ToggleBulbState({BulbOn,SetBulbOn}){
  function Toggle(){
    SetBulbOn(!BulbOn)
  }
  return(
    <div>
      <button onClick={Toggle}>Toggle Bulb State</button>
    </div>
  )
}


export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



//this is for prop drilling
//as we can see our tree is smth like this App at the top then we have Light
//Light has two branches Bulbstate and Toggle BulbState
//now we are defining ourr state var in the appn comp
//and passing it down to the light comp which is thwen passing thosen 
//props to Bullbstate and ToggleBulbstate this is esentially drilling the prop
//down the tree which is not suited as as our app gets complezz it would get very
//messed up as more andf more props would make it very hard for us 
//to drill down the tree and make our code unreadable and complex

//there comes state management libraries 

function App() {
  const [count, setCount] = useState(0)
  const [BulbOn,SetBulbOn] = useState(true)

  return (
    <div>
      <Light BulbOn={BulbOn} SetBulbOn={SetBulbOn}/>
    </div>
  )
}

function Light({BulbOn,SetBulbOn}){

    return(
      <div>
        <div>hi</div>
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

import { useState,createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const BulbContext = createContext();

function BulbProvider({children}){
  const [BulbOn,SetBulbOn] = useState(true)
  return <BulbContext.Provider value={{
    BulbOn: BulbOn,
    SetBulbOn: SetBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {
  const [count, setCount] = useState(0)


  return(
    <div>
      <BulbProvider>
        <LightBulb/>
      </BulbProvider>
    </div>
  )


  //we can write this .Provider part in a clean way by creating a wrapper comp
  //or say pur own provider comp which under the hood uses this   
  // return (
  //   <div>
  //     <BulbContext.Provider value={{
  //       BulbOn: BulbOn,
  //       SetBulbOn: SetBulbOn
  //     }}>
  //       <LightBulb/>
  //     </BulbContext.Provider>
  //   </div>
  // )
}

function LightBulb(){ 

    return(
      <div>
        <BulbState />
        <ToggleBulbState />
      </div>
    )
}

function BulbState(){
  const { BulbOn } = useContext(BulbContext)
  return(
    <div>
      { BulbOn ? 'BulbOn' : 'BulbOff'}
    </div>
    
  )
}

function ToggleBulbState(){
  const {BulbOn,SetBulbOn} = useContext(BulbContext)
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

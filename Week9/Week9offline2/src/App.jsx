import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//fragments in rect
//a commonn  mistake which even we faced was that we can not return multiple divs
//from a comp instead we must wrap those in a parent div and add as many children
//we want then there is no issue

//but if u are adamant then use fragments like below
function App(){
  return(
    <>
      <div>
        hi there
      </div>
      <div>
        hello
      </div>
    </>
    
  )
}

export default App
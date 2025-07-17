import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//children are like props but unlike specific variable things 
//u can pass a small component inside a bigger component or lets say
//a smaller snippet of jsx html code inside a bigger component hence helping us
//reduce making components we can make a generic component and not only pass variables as props 
//but also pass smaller compnents or html 

//if we use children keyword by react we need not pass the html part as a key 
//we can directly wruite the smaller part within the comp
//and in the comp write children where we want to place it

function App() {
  const [count, setCount] = useState(0)

  return <div style = {{display:"flex",background:"gray"}}>
      <Card>
        <div style = {{color: "green"}}>
          What do you want to post <br/><br/>
          <input type={'text'}/>
        </div>
      </Card>
      <Card>
        hi there
      </Card>
    </div>
  
}

function Card({ children }){
  return(
    <div style = {{background: "white",borderRadius: 10,color: "black",padding: 10,margin: 10}}>
      upper topbar
      {children}
      lower footer
    </div>
  )
}

export default App

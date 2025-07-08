import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{backgroundColor: "#95a5a6",height: "100vh"}}>
    <PostComponent/>
    <PostComponent/>
    <PostComponent/>
   </div>
  )
}
//structure ur app in componments so that
//a lot of devs can develop/use it 
//define a state of ur application

function PostComponent(){
  
  return <div style={{background:"white",width:350,borderRadius:20,padding:20,margin: "0 auto"}}>
    <div style={{ display: "flex"}}>
      <img src="https://picsum.photos/100" alt="test"
      style = {{
        width: 40,
        height: 40,
        borderRadius: 20
      }}/>

      <div style={{marginLeft: 10}}>
        <div>
          100xdevs
        </div>
        <div>
          23,388 followers
        </div>
        <div>
          12m
        </div>
      </div>
    </div>

    <div style={{marginTop:10}}>
      What to know how to win big Check out these folks won 6000$ in bounties
    </div>
    </div>
  
}





export default App
 
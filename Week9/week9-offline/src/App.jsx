import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{backgroundColor: "#95a5a6",height: "100vh"}}>

    
    <PostComponent name="100xdevs" subtitle="23,668 followers" time="21m" description="Want to know how to learn to get 6000$ in bounties"/>
    <br/>
    <PostComponent name="raman" subtitle="23,000 followers"/>
    <br/>
    <PostComponent/>
   </div>
  )
}
//structure ur app in componments so that
//a lot of devs can develop/use it 
//define a state of ur application


//props 
//what are props 
//props are nothing but read only properties shared between components
//a partent component can send data to a child component
// <component key = value/>
//jha componet use krr rhe ho vha se directly value bhjena ke liye
//issi ki madad se to humare componts variable honge jisse hum
//component ko reuse krr paenge with diff values

function PostComponent(props){
  
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
          {props.name}
        </div>
        <div>
          {props.subtitle}
        </div>


        {(props.time !== undefined) ? <div style={{display: "flex"}}>
          <div>
            {props.time}
          </div>
          <img src='https://media.istockphoto.com/id/1031786258/vector/watch.jpg?s=612x612&w=0&k=20&c=U_7Euy34YQwrg2zgJw_VutYLUjDHYyKUr483e-w29RE=' 
          style={{height:10,width:10,padding:5}}/>
        </div> : <div></div> } 
        
      </div>
    </div>

    <div style={{marginTop:10}}>
      {props.description}
    </div>
    </div>
  
}

//hw
function ProfileCard(){

}





export default App
 
import { PostComponent } from './post'

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  //it is recommendeed to use only const in here to prevent any future reassingnment
  const [count, setCount] = useState(1)

  const [posts,setPosts] = useState([])

  // const posts = [{}]

  const postsComponents = posts.map((post) => (
    <PostComponent
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
    />
  ))

function addPost(){
  // posts.push({
  //   name:"divy",
  //   subtitle:"1000535 followers",
  //   time:"6m ago",
  //   image:"https://picsum.photos/100",
  //   description:"Learn how to win big and enjoy life"
  // })

  setPosts([...posts,{
    name:"divy",
    subtitle:"1000535 followers",
    time:"6m ago",
    image:"https://picsum.photos/100",
    description:"Learn how to win big and enjoy life"
  }])
}

function Inc(){
  setCount((count) => count + 1)
}


//use effect basically monitors whnever a change occurs 
//in var in inside its array in case of ccounter since it was 
//empty it only ran at start
useEffect(function(){
  console.log("Only once")
  setInterval(Inc,1000)
},[]) //this effect will run on mount, bcs the array is empty


useEffect(function(){
  console.log("This should be log after every 1 second")
},[count])


  return (
   <div style={{backgroundColor: "#95a5a6",height: "100vh"}}>

   {/* <ToggleMessage/>
   <ToggleMessage/>
   <ToggleMessage/> */}

    {/* <Notification/> */}

    {/* <button onClick={addPost}>Add post</button>

    {
      postsComponents
    } */}


      <div  style={{display: "flex"}}>
        <div style={{background: "red", borderRadius: 20, width: 20, height: 25, padding: 10}}>
          {count}
        </div>
        <div>
          <img style={{cursor:"pointer",height:40}} src={"https://static.vecteezy.com/system/resources/previews/022/151/493/non_2x/bell-notification-icon-symbol-image-illustration-of-the-alarm-alert-symbol-in-eps-10-vector.jpg"}/>
        </div>

      </div>
      <button onClick ={Inc}>Increase Count</button>


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



// const ToggleMessage  = () =>{
//     // let isVisible = true

//     let [isVisible, setVisible] = useState(true);

//     console.log("Re-rendered")
//     function toggle(){
//       isVisible = !isVisible
//       setVisible(isVisible)
//     }

//     return (
//       <div>
//         <button onClick={toggle}>
//             Toggle Message
//         </button>
//         {isVisible ? <p>THis is message is conditionally rendered </p> : <div></div>}
//       </div>
//     )
// }

const Notification  = () =>{
  // let isVisible = true

  let [notificationCount, setNotificationCount] = useState(0);

  console.log("Re-rendered")
  function setNotification(){
      notificationCount +=  1;
      setNotificationCount(notificationCount)
  }

  return (
    <div>
      <button onClick={setNotification}>
          Increase Count {notificationCount}
      </button>

    </div>
  )
}




//hw
function ProfileCard(){

}





export default App
 
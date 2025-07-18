import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";


//we are imporing outlet from react router dom its usecase is that it hepls
//us define an outer  layout which will be fixed we make a componet layout and
//wrap all our routes in that
function App() {
  const [count, setCount] = useState(0)


  //all routes must start as whatever is wtiiten in the base path of he outer layout route
  return (
      <div>
        <BrowserRouter>
          <div>
            hi
          </div>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
              <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
              <Route path='/' element={<Landing/>}/>
              <Route path='*' element={<ErrorPage/>}/>
            </Route>
          </Routes>

          Footer | Contact us
        </BrowserRouter>
      </div>
  )
}

function Header(){
  return(
    <div>
        <Link to="/">Allen</Link>
        <Link to='/neet/online-coaching-class-11'>Class 11</Link>
        <Link to='/neet/online-coaching-class-12'>Class 12</Link>
    </div>
  )
}

function Layout(){
  return(
    <div style={{background: "red"}}>
        <Header/>
        <Outlet/>
        Footer | Contact Us 
    </div>
  )
}

function Landing(){
  return (
    <div>
      Welcome to allen
    </div>
  )
}

function Class11Program(){
  return(
    <div>
      This is class 11
    </div>
  )
}

//most of the routing part can be done by wrapping up buttons and things in the link tag
//note if we do it with a normal page it is no longer a single page app
//we must use link tag so that it is a single page app

//other than link we have the useNavigate hook which can also help us in routing


function Class12Program(){
  return(
    <div>
      hi
    </div>
  )
}

function ErrorPage(){
  return(
    <div>
      Page not found
    </div>
  )
}
export default App

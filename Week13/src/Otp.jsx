import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Buttons'
import { Input } from './components/Input'
import { Otp } from './components/Otp'
import { number } from 'zod'



const App = () => {
  return(
    <div className='h-screen bg-[#002d58]'>
      <TopBar/>
      <Otp number={4}/>


    </div>

  ) 
}


function TopBar(){
  return(
  <div>
    <div className='flex justify-center pt-30'> 
      <div className='mr-3'>
        <img src='./image.png' className='size-10'></img>
      </div>
      <div className='text-green-200 text-4xl font-extralight' >
        Webinar
        <span className='text-white-400'>.gg</span>
      </div>
    </div>
    <br/>
    <br/>
    <div className='flex justify-center text-white text-3xl mt-5'>
      Check your Email for a Otp
    </div>
  </div>
  )
} 


export default App
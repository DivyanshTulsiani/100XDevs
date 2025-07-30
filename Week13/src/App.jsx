import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Buttons'
import { Input } from './components/Input'

// function App() {
//   const [count, setCount] = useState(0)
  
//   return (
//     <>
//       {/* this is flex in tailwind and assigning bgs */}
//       <div className='bg-blue-300'>hi</div>
//       <div className='flex justify-between'>
//         <div>
//           hi there be happy
//         </div>
//         <div>
//           hi there be confident
//         </div>
//         <div>
//           hi there be positive
//         </div>
//       </div>
//       {/* grids in tailwind */}
//       <div className='grid grid-cols-12'>
//         <div className='col-span-5 bg-blue-300'>
//           hi from first happy div
//         </div>
//         <div className='col-span-5 bg-red-200'>
//           hi from second happy div
//         </div>
//         <div className='col-span-2 bg-green-300'>
//           hi from third happy div
//         </div>
//       </div>

//       {/* now we will see responsivenesss in tailwind */}
//       {/* tailwinf is mobile first this means the breakpoints that we will use
//       would be for sizes above or say more than them ex sm md lg xl 2xl 
//       if i say md-bg-blue-300 than my screen would go blue at md and after it 
//       not before which is a bit counterintuitive but its mobile first */}

//       <div className='md:bg-blue-300 bg-red-300'>
//         hi i am happy that this is responsive
//       </div>
//       <div className='grid grid-cols-12'>
//         <div className='col-span-12 sm:col-span-4 bg-red-300 text-4xl text-blue-400'>
//           hi1 
//         </div>
//         <div className='col-span-12 sm:col-span-4 bg-blue-300'>
//           hi22
//         </div>
//         <div className='col-span-12 sm:col-span-4 bg-green-300'>
//           hi33
//         </div>
//       </div>

//     </>
//   )
// }

const App = () => {
  return(
    <div className='h-screen bg-[#002d58]'>
      <TopBar/>
      <Input/>
      <Button children={"Continue"}/>
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
      Verify Your age
    </div>
  </div>
  )
} 




export default App

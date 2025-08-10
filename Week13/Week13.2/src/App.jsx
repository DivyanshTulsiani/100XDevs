import { useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SidebarClass1 } from './components/answers/basic-project-1'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'
import { UseMedia } from './hooks/usemedia'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <SidebarClass1/>
//     </>
//   )
// }


// function App() {
//   const [count, setCount] = useState(0)
//   //making toggleable darl mode in tailwindv4 requires us to change th parent element in ourt case
//   //the html tag outside in the index.html to have a class called dark and and then iin all our
//   //components we can add the dark part as dark: ...

//   return (
//     <>
//       <button onClick={() => {
//         document.querySelector("html").classList.toggle("dark", document.querySelector("html").classList[0] == "dark" ? false : true )
//       }}>
//         Toggle
//       </button>
//       <div className='h-screen bg-red-500 dark:bg-blue-500'>
//         hi
//       </div>

//     </>
//   )
// }

export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [SidebarOpen, SetSidebar] = useState(true)
  return (
    <SidebarContext.Provider value={{
      SidebarOpen: SidebarOpen,
      SetSidebar: SetSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

const App = () => {
  return (
    <>
      <div className='flex'>
        <SidebarProvider>
          <Sidebar />
          <MainContent />
        </SidebarProvider>

      </div>
    </>
  )
}

export default App

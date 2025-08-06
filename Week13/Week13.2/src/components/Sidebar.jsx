import { useContext } from "react"
import { SidebarContext } from "../App"
import { Toggle } from "./icons/toggle"


export const Sidebar = () => {
  const {SidebarOpen,SetSidebar} = useContext(SidebarContext)
  if(!SidebarOpen){
    return(
      <div className="fixed left-0 top-0 cursor-pointer hover:bg-slate-200" onClick={() => {
        SetSidebar(!SidebarOpen)
      }}>
        <Toggle/>
      </div>
    )
  }
  if(SidebarOpen){
    return(
      <>
        <div className="bg-blue-500 w-96 h-screen">
          <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
            SetSidebar(!SidebarOpen)
          }}>
            <Toggle/>
          </div>
          hi
        </div>
      </>
    )
  }

}
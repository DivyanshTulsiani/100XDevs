import { useContext } from "react"

import { SidebarContext } from "../App.jsx"

import { SidebarProvider } from "../App.jsx"

export const MainContent = () => {
  const { Sidebaropen,SetSidebar } = useContext(SidebarContext)
  return (
    <>
      <div className="w-full">
        <div className="bg-black h-34">
          hi
        </div>
        <div className="grid grid-cols-13 gap-7 p-4">
          <div className="h-96 hidden rounded-2xl col-span-13  bg-yellow-300 -translate-y-12 md:block md:col-span-3">
            hi
          </div>
          <div className="col-span-13 h-96 bg-red-500 rounded-2xl md:col-span-6">

          </div>
          <div className="col-span-13 h-68 rounded-2xl bg-orange-400 md:col-span-4">

          </div>
        </div>
      </div>

    </>
  )
}
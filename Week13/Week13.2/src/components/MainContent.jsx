import { useContext } from "react"

import { SidebarContext } from "../App.jsx"

import { SidebarProvider } from "../App.jsx"
import { PersonImg, Details } from "./icons/image.jsx"
import { DataHeader } from "./DateHeaders.jsx"
import { Date } from './icons/Date.jsx'
import { DateApp } from "./icons/DateApp.jsx"
import { Live } from "./icons/Live.jsx"
import { Options } from "./icons/Options.jsx"
// import img from "./icons8-calendar-50"
// import { Upcoming } from "./icons/Upcoming.jsx"

export const MainContent = () => {
  const { Sidebaropen, SetSidebar } = useContext(SidebarContext)
  return (
    <>
      <div className="w-full">
        <div>
          <img className="w-full h-34" src='https://png.pngtree.com/background/20230617/original/pngtree-abstract-black-wave-background-created-through-3d-rendering-picture-image_3702852.jpg'></img>
        </div>
        <div className="grid grid-cols-13 gap-7 p-4 bg-[#fcfcfe] h-screen">
          <div className="h-96 hidden shadow-2xl rounded-2xl col-span-13  bg-[#ffffff] -translate-y-12 md:block md:col-span-3">
            <PersonImg />
            <Details />
          </div>
          <div className="col-span-13 md:col-span-6">
            <div>
              <div className="">
                Monday, 14 October
              </div>
              <div className="font-semibold text-[#363c50] text-3xl mt-3 mb-8">
                Good morning, Prabhleen <span>👋</span>
              </div>
            </div>

            <div className="h-96 bg-[#ffffff] shadow-2xl  rounded-2xl">
              <DataHeader />
              <DateApp Time={"11:30 AM"} iswhat={"Live"} topic={"UX Webinar"} />
              <DateApp Time={"11:30 AM"} iswhat={"Upcoming"} topic={"My first Webinar"} />
              <DateApp Time={"11:30 AM"} iswhat={"Upcoming"} topic={"Important Webinar"} />


            </div>
          </div>
          <div className="flex col-span-13 mt-26 h-68 shadow-2xl rounded-2xl bg-[#ffffff] md:col-span-4">
            <Options icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
              <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
              <path fill-rule="evenodd" d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z" clip-rule="evenodd" />
            </svg>
            } content={"Schedule a Webinar"} />

            <Options icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
            </svg>
            } content={"Join a Webinar"} />
            {/* <Options /> */}
          </div>
        </div>
      </div>

    </>
  )
}
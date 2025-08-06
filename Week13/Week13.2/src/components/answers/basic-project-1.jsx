
// export function SidebarClass1(){
//   return <div className="flex">
//     <div className="bg-red-200">
//       Sidebar
//     </div>
//     <div className="bg-green-800">
//       content
//     </div>
//   </div>
// }


// export function SidebarClass1(){
//   return <div className="flex">
//     <div className="transition-all delay-1000 h-screen w-8 bg-green-500 md:w-96">
//       hi this is Sidebar
//     </div>
//     <div className="h-screen w-full bg-red-500">
//       this is content
//     </div>
//   </div>
// }

export function SidebarClass1(){
  return <div className="flex">
    <div className="transition-all ease-in-out delay-1000 h-screen w-0 bg-green-500 md:w-96">
      hi this is Sidebar
    </div>
    <div className="h-screen w-full bg-red-500">
      this is content
    </div>
  </div>
}
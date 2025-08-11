export const Webinar = (props) =>{
  return(
    <div className="bg-[#222848] flex p-2 gap-2 rounded-xl text-sm">
      <div>
        {props.icon}
      </div>
      <div className="text-white">
        {props.content}
      </div>
    </div>
  )
}
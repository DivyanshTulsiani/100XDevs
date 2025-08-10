export const Webinar = (props) =>{
  return(
    <div className="bg-[#222848] flex">
      <div>
        {props.content}
      </div>
      <div>
        {props.icon}
      </div>
    </div>
  )
}
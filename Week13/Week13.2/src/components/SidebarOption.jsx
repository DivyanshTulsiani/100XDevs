export const SidebarOption = (props) => {
  return(
    <div className="flex justify-between mt-2 ml-4 mr-4 hover:bg-[#e7e8ee] rounded-xl p-3">
      <div>
        {props.content}
      </div>
        <div>
          {props.icon}
        </div>

    </div>
  )
}
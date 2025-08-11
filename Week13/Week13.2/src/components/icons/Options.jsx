export const Options = (props) => {
  return (
    <div className="flex-row m-4 mt-8">
      <div className="bg-[#78d8cd] mx-auto h-16 w-16 flex justify-center items-center rounded-xl">
        {props.icon}
      </div>
      <div>
        {props.content}
      </div>
    </div>
  )
}
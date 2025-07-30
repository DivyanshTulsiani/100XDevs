export const Button =({
  onClick,
  click,
  children,
  reference

}) => {
  return <div onClick={onClick} ref={reference} className={'cursor-pointer flex justify-center bg-[#7e96a8] mt-7 w-70 h-11 mx-auto rounded-md items-center'}>
    <div className='text-lg  text-white font-medium '>{children}</div>
  </div> 
}
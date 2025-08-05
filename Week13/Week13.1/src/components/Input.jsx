export const Input = ({

}) => {
  return(
    <div className='flex justify-center mt-11'>
    <div>
      <div className="text-white font-light">
        Please confirm your birth year. This data will not be stored.
      </div>
      <div className='flex justify-center mt-3'>
        <input className='bg-[#18416a] w-70 h-11 rounded-lg text-white font-medium' type='text' placeholder='Your Birth Year'/>

      </div> 
    </div>
    </div>
  )
}
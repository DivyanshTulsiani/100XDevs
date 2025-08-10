import { Calendar } from './icons/calendar'
import { Date } from './icons/Date.jsx'
import { Arrow } from './icons/Arrow.jsx'

export const DataHeader = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex mt-5 bg-[#f6f7f9] w-112 h-12 rounded-lg items-center'>
          <div className="ml-3">
            <Calendar />
          </div>
          <div>
            <Date/>
          </div>
          <div className='ml-32'>
            <Arrow/>
          </div>
        </div>
      </div>
    </>
  )
}
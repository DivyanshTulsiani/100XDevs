import { Live } from "./Live.jsx"
import { Upcoming } from "./Upcoming.jsx"

export const DateApp = (props) => {

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-112 mt-6 border-b pb-3">
          <div className="flex-row border-r">
            <div className="pr-4">
              <div className="text-xl">
                {props.Time}
              </div>
              <div className="text-xs mt-2 text-gray-800">
                {props.Time}
              </div>
            </div>

          </div>
          <div className="">
            <div className="flex items-center gap-2">
              <div className='pl-2 text-xs'>
                {props.iswhat}
              </div>
              <div className="text-red-600">
                {props.iswhat == "Live" ? <Live/> : <Upcoming/>}
              </div>

            </div>
            <div className="pl-2 text-lg">
              {props.topic}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
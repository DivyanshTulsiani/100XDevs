import {useRef, useState} from 'react'
import { Button } from './Buttons'

export const Otp = ({
  number
}) => {
  const ref = useRef(Array(number).fill(0))
  const ref7 = useRef()

  

  
  return(
    <>
    <div className="flex justify-center mt-4">
      {Array(number).fill(1).map((x,index)=>{
              return <OtpBox key={index} reference={(e) => ref.current[index] = e} onDone={() => {
                console.log(ref);
                console.log(index);
                if(index >= 0 && index < 3 ){
                  ref.current[index + 1].focus()
                }
                else{
                  ref7.current.focus()
                }

              }} goBack={()=>{
                if(index > 0){
                  ref.current[index - 1].focus()
                }
              }}/>
      })}
    </div>
    <Button reference={ref7} children={"Continue"}/>
    </>
  )
}


function CheckNum(value){
  if(!isNaN(value) && isFinite(value)){
    return true
  }
  else{
    return false  
  }

}

const OtpBox = ({
  reference,
  onDone,
  goBack,
  index
}) => {
  const [inputBoxVal,setinputBoxVal] = useState("")
  return(
    <div>
      <input ref={reference} value={inputBoxVal} onKeyUp={(e)=>{
        if(e.key == 'Backspace'){
           goBack()
         }
      }} onChange={(e) => {
        const val = e.target.value
        if(CheckNum(e.target.value)){
          setinputBoxVal(val)
          onDone()
        }
        else{

        }
        
      //  { CheckNum(e.target.value) ? onDone() : alert("Please enter a Number")}
      }}
       type="text" className="bg-[#18416a] w-[40px] h-[50px] rounded-xl m-1 p-4 text-white" ></input>      
    </div>
  )
}


//old approach a lot of hardcoding being done here the approach above gives a way better idea regarding the same


// export const Otp = ({

// }) => {
//   const ref1 = useRef()
//   const ref2 = useRef()
//   const ref3 = useRef()
//   const ref4 = useRef()
//   const ref5 = useRef()
//   const ref6 = useRef()

//   const ref7 = useRef()
//   return(
//     <div>
//     <div className="flex justify-center mt-4">
//       <OtpBox reference={ref1} onDone={() => {
//         ref2.current.focus()
//       }} goBack={()=>{
//       }}/>
//       <OtpBox reference={ref2} onDone={() => {
//         ref3.current.focus()
//       }} goBack={()=>{
//         ref1.current.focus()
//       }}/>
//       <OtpBox reference={ref3} onDone={() => {
//         ref4.current.focus()
//       }} goBack={()=>{
//         ref2.current.focus()
//       }}/>
//       <OtpBox reference={ref4} onDone={() => {
//         ref5.current.focus()
//       }} goBack={()=>{
//         ref3.current.focus()
//       }}/>
//       <OtpBox reference={ref5} onDone={() => {
//         ref6.current.focus()
//       }} goBack={()=>{
//         ref4.current.focus()
//       }}/>
//       <OtpBox reference={ref6} onDone={() => {
//         ref7.current.focus()
//       }}  goBack={()=>{
//         ref5.current.focus()
//       }}/>
//     </div>

//     <Button reference={ref7} children={"Continue"}/>
//     </div>  
//   )
// }
// function CheckNum(value){
//   if(!isNaN(value) && isFinite(value)){
//     return true
//   }
//   else{
//     return false  
//   }

// }

// const OtpBox = ({
//   reference,
//   onDone,
//   goBack
// }) => {
//   const [inputBoxVal,setinputBoxVal] = useState("")
//   return(
//     <div>
//       <input ref={reference} value={inputBoxVal} onKeyUp={(e)=>{
//         if(e.key == 'Backspace'){
//            goBack()
//          }
//       }} onChange={(e) => {
//         const val = e.target.value
//         if(CheckNum(e.target.value)){
//           setinputBoxVal(val)
//           onDone()
//         }
//         else{

//         }
        
//       //  { CheckNum(e.target.value) ? onDone() : alert("Please enter a Number")}
//       }} type="text" className="bg-[#18416a] w-[40px] h-[50px] rounded-xl m-1 p-4 text-white" ></input>      
//     </div>
//   )
// }

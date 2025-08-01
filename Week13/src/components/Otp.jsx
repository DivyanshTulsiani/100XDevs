import {useRef, useState} from 'react'
import { Button } from './Buttons'

export const Otp = ({
  number
}) => {
  const ref = useRef(Array(number).fill(0))
  const ref7 = useRef()

  

  //very imp to know what we are doing here 
  //we are creating a generic component where we enter the numberof sybotop boxes we want and it produces them
  //this is being achieved by creating an array of 0s and having our reference point to that 
  //sice we are unable to produce these many refs in an loop like the map we have to follow the above approach

  //thus when we produce that comp and give the reference we have we are that that (e) menas whatever dom thingy is being created by the map
  //is taken and ref.current which is our array and ref.current[index] = e meaning that specific index of our array is assigned to e
  //now in our ondone and goback fn this is simple we are jsut assigning indexes of forward or prev indexes  wtith some boundary condns

  return(
    <>
    <div className="flex justify-center mt-4">
      {Array(number).fill(1).map((x,index)=>{
              return <OtpBox key={index} reference={(e) => ref.current[index] = e} onDone={() => {
                // console.log(ref);
                // console.log(index);
                if(index >= 0 && index < number - 1){
                  ref.current[index + 1].focus()
                }
                else{
                  ref7.current.focus()
                }

              }} goBack={()=>{
                if(index > 0){
                  // ref.current[index].target.blur()
                  // ref.current[index].target.value = ''
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
        console.log("avd");
        console.log(e.keyCode)
        const val = e.target.value
        if(CheckNum(e.target.value) && e.target.value.length == 1){
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

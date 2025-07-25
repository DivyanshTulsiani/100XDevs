import {useRef,useEffect} from 'react'


//the implementaionis that useEfecgt in react runs after the react returns
export function usePrev(value){
  const myRef = useRef()

  useEffect(()=>{
    myRef.current = value
  },[value])

  return myRef.current
}
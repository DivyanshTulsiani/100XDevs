import { useEffect, useState } from "react"

//here window.matchMedia gives us the specific knowhow of the window and we assign that to a variable
//now we add a listener to our window by media.addlistener and we insert a function inside our listener
//that it changes the state variable of the sidebar 
//we also remove this listener while ending as there would be multiple listeners if we dont remove it


export const UseMedia = (query) => {
  const [Matches, SetMatches] = useState(true)

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = () => SetMatches(media.matches)

    media.addListener(listener)
    return () => media.removeListener(listener)
    
  }, [Matches, query])

  return Matches
}
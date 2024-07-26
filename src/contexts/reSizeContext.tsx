import { useState, useEffect, ReactNode, createContext, useContext } from "react"

type reSizeProps = {
    children: ReactNode
}

type reSizeType = {
    width: number
    height: number
}

const reSizeContext = createContext<reSizeType | null>(null)

export function useReSizeContext () {
    const value = useContext(reSizeContext)
    if (value == null) throw Error("Out of reSizeContext scope")
    return value
} 

export function ReSizeProvider ({children}: reSizeProps) {
  
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  
  useEffect(() => {
    const update = () => {
      requestAnimationFrame(()=>{ setWidth(window.innerWidth); setHeight(window.innerHeight) })
    }

    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('resize', update)
    }
  }, [])

  return(
    <reSizeContext.Provider value={{
        width,
        height
    }}>
        {children}
    </reSizeContext.Provider>
  )
}
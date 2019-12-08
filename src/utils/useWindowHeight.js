import React from "react"

const getWindowHeight = () => window.innerHeight

export const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = React.useState(-1)

  React.useEffect(() => {
    setWindowHeight(getWindowHeight())

    const handleResize = () => setWindowHeight(getWindowHeight())
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowHeight
}

import React from "react"

const getWindowHeight = () => window !== "undefined" && window.innerHeight

export const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = React.useState(getWindowHeight())

  React.useEffect(() => {
    const handleResize = () => setWindowHeight(getWindowHeight())
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowHeight
}

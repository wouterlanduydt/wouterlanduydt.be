import React from "react"
import { navigate } from "gatsby"

export default () => {
  React.useEffect(() => {
    navigate("/")
  }, [])

  return null
}

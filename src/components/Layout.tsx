import React from "react"
import { useAuth0 } from "../services/auth"

const Layout = ({ children }) => {
  const { loading } = useAuth0()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      
      {children}
    </>
  )
}

export default Layout
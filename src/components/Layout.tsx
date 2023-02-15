import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

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
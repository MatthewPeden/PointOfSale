import React from "react"
import { navigate } from "gatsby"
import { useAuth0 } from "@auth0/auth0-react"

const ProtectedPage = () => {
  const { isAuthenticated, isLoading } = useAuth0()

  React.useEffect(() => {
    const checkAuthentication = async () => {
      if (!isLoading && !isAuthenticated) {
        navigate("/")
      }
    }

    checkAuthentication()
  }, [isLoading, isAuthenticated])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <div>This is a protected page!</div>
}

export default ProtectedPage

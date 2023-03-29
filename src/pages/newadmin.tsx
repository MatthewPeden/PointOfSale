import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { navigate } from "gatsby"

const AdminUsers = () => {
const [email, setEmail] = useState("")
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
const handleClick = () => {
setEmail("ccwky12@gmail.com")
}

return (
<div>
<h1>Admin Users</h1>
<button onClick={handleClick}>Show Admin Users</button>
<p>{email}</p>
</div>
)
}

export default AdminUsers;
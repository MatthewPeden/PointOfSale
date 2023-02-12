import React, { useState, useEffect, useContext } from "react"
import type { Auth0Client } from '@auth0/auth0-spa-js';

let auth0Client: Auth0Client | null = null;
console.log('AUTH0_DOMAIN:', process.env.AUTH0_DOMAIN);
console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID);
const createAuth0Client = async () => {
  if (!auth0Client) {
    auth0Client = await import('@auth0/auth0-spa-js').then((module) => {
      return module.createAuth0Client({
        domain: process.env.AUTH0_DOMAIN,
        client_id: process.env.AUTH0_CLIENT_ID,
      });
    });
  }
  return auth0Client;
};

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext()
export const useAuth0 = () => useContext(Auth0Context)
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState()
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client()
      setAuth0(auth0FromHook)

      if (window.location.search.includes("code=") &&
          window.location.search.includes("state=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticated)

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser()
        setUser(user)
      }

      setLoading(false)
    }
    initAuth0()
    // eslint-disable-next-line
  }, [])

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client.getUser()
    setUser(user)
    setIsAuthenticated(true)
  };

  const handleRedirectCallback = async () => {
    setLoading(true)
    try{
    await auth0Client.handleRedirectCallback()
    }
    catch (error){
      console.error(error)
    }
    const user = await auth0Client.getUser()
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
  }
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  )
}
import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
`
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <NavbarLink
      onClick={() => loginWithRedirect()}
      href="#"
    >
      Log In
    </NavbarLink>
  );
};

export default LoginButton;
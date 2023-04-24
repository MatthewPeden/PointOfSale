// components/Navbar.tsx
import styled from "styled-components";
import Image from "next/image";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #bda0d9;
  color: white;
`;

const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
`;

const NavbarImageContainer = styled.div`
  margin-left: 10px;
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <a href="/">
        <NavbarImageContainer>
        <Image src="/Zamaco.png" alt="Zamaco Logo" width={60} height={60} />
        </NavbarImageContainer>
      </a>
      <NavbarLink href="/api/auth/login">Log In</NavbarLink>
      <NavbarLink href="/api/auth/logout">Log Out</NavbarLink>
      <NavbarLink href="/transaction">Checkout</NavbarLink>
      <NavbarLink href="/management">Management</NavbarLink>
      <NavbarLink href="/reports">Reports</NavbarLink>
      <div style={{ padding: "10px" }}></div>
    </StyledNavbar>
  );
};

export default Navbar;
